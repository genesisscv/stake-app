import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

export interface DetailsDto {
    id: string;
    symbol: string;
    type: string;
    fullName: string;
    logo: string;
    volume: number;
    marketCap: number;
}

@Injectable({ providedIn: 'root' })
export class DetailsApi {
    constructor(private http: HttpClient) { }
    readonly details$ = this.http
        .get<DetailsDto[]>('assets/data/details.json')

        // Cache the request and catch errors
        .pipe(shareReplay(1));
}
