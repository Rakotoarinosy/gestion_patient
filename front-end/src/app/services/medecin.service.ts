import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Medecin } from '../Entity/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private baseURL = "http://localhost:8080/medecins";

  constructor() { }

  getMedecins(): Observable<AxiosResponse<Medecin[]>> {
    return from(axios.get<Medecin[]>(this.baseURL));
  }

  getMedecin(id: number): Observable<AxiosResponse<Medecin>> {
    return from(axios.get<Medecin>(`${this.baseURL}/${id}`));
  }

  createMedicin(medecin: Medecin): Observable<AxiosResponse<Medecin>> {
    return from(axios.post<Medecin>(`${this.baseURL}/create`, medecin));
  }

  updateMedecin(id: number, medecin: Medecin): Observable<AxiosResponse<Medecin>> {
    return from(axios.put<Medecin>(`${this.baseURL}/${id}`, medecin));
  }

  deleteMedecin(id: number): Observable<AxiosResponse<void>> {
    return from(axios.delete<void>(`${this.baseURL}/${id}`));
  }
}
