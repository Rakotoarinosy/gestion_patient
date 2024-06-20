import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { Creneaux } from '../Entity/creneaux';

@Injectable({
  providedIn: 'root'
})
export class CreneauxService {

  private baseURL = "http://localhost:8080/creneaux";

  constructor() { }

  getCreneaux(): Observable<AxiosResponse<Creneaux[]>> {
    return from(axios.get<Creneaux[]>(this.baseURL));
  }

  getCreneau(id: number): Observable<AxiosResponse<Creneaux>> {
    return from(axios.get<Creneaux>(`${this.baseURL}/${id}`));
  }

  createCreneau(creneau: Creneaux): Observable<AxiosResponse<Creneaux>> {
    return from(axios.post<Creneaux>(`${this.baseURL}/create`, creneau));
  }

  updateCreneau(id: number, creneau: Creneaux): Observable<AxiosResponse<Creneaux>> {
    return from(axios.put<Creneaux>(`${this.baseURL}/${id}`, creneau));
  }

  deleteCreneau(id: number): Observable<AxiosResponse<void>> {
    return from(axios.delete<void>(`${this.baseURL}/${id}`));
  }
}
