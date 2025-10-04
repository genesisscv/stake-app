import { Injectable } from '@angular/core';
import { combineLatest, map, shareReplay } from 'rxjs';
import { HoldingsApi } from '../../holdings.api';
import { PricingApi } from '../../pricing.api';
import { DetailsApi } from '../../details.api';

export interface InstrumentVm {
    symbol: string;
    name: string;
    logo: string;
    shares: number;
    price: number;
    performance: number; // daily % change (e.g. 22.90)
}

@Injectable({ providedIn: 'root' })
export class PortfolioData {
    constructor(
        private holdings: HoldingsApi,
        private pricing: PricingApi,
        private details: DetailsApi
    ) { }

    // This combines all sources into a single stream our UI can use.
    // Keeps the logic in one place instead of spreading it across components.
    readonly details$ = combineLatest([
        this.holdings.holdings$,
        this.pricing.prices$,
        this.details.details$
    ]).pipe(
        map(([hs, ps, ds]) => {
            // Quick lookup maps so we can join fast by symbol
            const priceBy = new Map(ps.map(p => [p.symbol, p]));
            const detailBy = new Map(ds.map(d => [d.symbol, d]));

            return hs.map<InstrumentVm>(h => {
                const p = priceBy.get(h.symbol);
                const d = detailBy.get(h.symbol);

                const lastPrice = p?.close ?? h.avgPrice;
                const dayPct = p ? ((p.close - p.open) / p.open) * 100 : 0;

                return {
                    symbol: h.symbol,
                    name: d?.fullName ?? h.symbol,
                    logo: d?.logo ?? '',
                    shares: h.shares,
                    price: lastPrice,
                    performance: Number(dayPct.toFixed(2))
                };
            });
        }),
        // Cache result so multiple components can reuse it
        shareReplay(1)
    );

    // Calculates total portfolio value based on current prices
    readonly totalEquity$ = this.details$.pipe(
        map(rows => rows.reduce((sum, r) => sum + r.price * r.shares, 0)),
        shareReplay(1)
    );
}
