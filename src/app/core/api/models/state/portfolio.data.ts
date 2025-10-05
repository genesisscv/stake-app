import { Injectable } from '@angular/core';
import { combineLatest, map, shareReplay } from 'rxjs';
import { HoldingsApi } from '../../holdings.api';
import { PricingApi } from '../../pricing.api';
import { DetailsApi } from '../../details.api';

export interface Instrument {
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
        private holdingsApi: HoldingsApi,
        private pricingApi: PricingApi,
        private detailsApi: DetailsApi
    ) { }

    /**
     * Combines holdings, pricing, and details into one stream
     * Provides a list of instruments ready for UI consumption
     */
    readonly details$ = combineLatest([
        this.holdingsApi.holdings$,
        this.pricingApi.prices$,
        this.detailsApi.details$
    ]).pipe(
        map(([holdings, prices, details]) => {
            // Create quick lookup maps for prices and details by symbol
            // This allows access when joining data across sources
            const priceMap = new Map(prices.map(p => [p.symbol, p]));
            const detailMap = new Map(details.map(d => [d.symbol, d]));

            // Merge holdings with price and detail data into a unified Instrument list
            return holdings.map<Instrument>(h => {
                // Look up matching price and detail records for this holding
                const price = priceMap.get(h.symbol);
                const detail = detailMap.get(h.symbol);

                // Use the latest closing price if available, otherwise fallback to the average purchase price
                const lastPrice = price?.close ?? h.avgPrice;

                // Calculate daily percentage change if price data is present
                const dayChangePct = price
                    ? ((price.close - price.open) / price.open) * 100
                    : 0;

                // Return an Instrument object used by the UI
                return {
                    symbol: h.symbol,
                    name: detail?.fullName ?? h.symbol,
                    logo: detail?.logo ?? '',
                    shares: h.shares,
                    price: lastPrice,
                    performance: Number(dayChangePct.toFixed(2))  // format to two decimals
                };
            });
        }),
        // cache result so multiple components can reuse it
        shareReplay(1)
    );

    /**
     * Calculates the total portfolio value based on current prices
     */
    readonly totalEquity$ = this.details$.pipe(
        map(instruments =>
            instruments.reduce((sum, i) => sum + i.price * i.shares, 0)
        ),
        shareReplay(1)
    );
}
