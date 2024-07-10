import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from './models/donation';
@Injectable({
  providedIn: 'root'
})
export class DonationService {



  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/donations';
  addDonation(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(this.apiUrl, donation);
  }
}
