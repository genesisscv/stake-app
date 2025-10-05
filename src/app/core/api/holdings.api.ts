import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, shareReplay } from 'rxjs';

export interface HoldingDto {
    symbol: string;
    shares: number;
    avgPrice: number;
    accountId: string;
    currency: string;
}

@Injectable({ providedIn: 'root' })
export class HoldingsApi {
    constructor(private http: HttpClient) { }
    readonly holdings$ = this.http
        .get<HoldingDto[]>('assets/data/holdings.json')

        // Cache the request and catch errors
        .pipe(
            catchError(err => { console.error('holdings api error', err); return of([] as HoldingDto[]); }),
            shareReplay(1)
        );
}
