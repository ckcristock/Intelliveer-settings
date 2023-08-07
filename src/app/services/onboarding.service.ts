import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private http: HttpClient) { }

  getBGnLE() {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  getLCnPR() {
    return this.http.get("https://rickandmortyapi.com/api/location");
  }
}
