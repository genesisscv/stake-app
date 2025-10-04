import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, shareReplay, tap } from 'rxjs';

export interface PricingDto {
    id: string;
    symbol: string;
    open: number;
    close: number;
    ask: number;
    high: number;
    low: number;
}

@Injectable({ providedIn: 'root' })
export class PricingApi {
    constructor(private http: HttpClient) { }
    readonly prices$ = this.http
        .get<PricingDto[]>('assets/data/pricing.json')

        // Cache the request and catch errors
        .pipe(
            tap(d => console.log('pricing.json', d)),
            catchError(err => { console.error('pricing api error', err); return of([] as PricingDto[]); }),
            shareReplay(1)
        );
}

