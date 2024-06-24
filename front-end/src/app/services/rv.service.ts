import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import { Rv } from '../entities/rv';
import { Creneaux } from '../entities/creneaux';
import { Patient } from '../entities/patient';

@Injectable({
  providedIn: 'root'
})
export class RvService {

  private baseURL = "http://localhost:8080/rvs";
  private patientsURL = "http://localhost:8080/patients";
  private creneauxURL = "http://localhost:8080/creneaux";

  constructor() { }

  getRvs(): Observable<AxiosResponse<Rv[]>> {
    return from(axios.get<Rv[]>(this.baseURL));
  }

  getRv(id: number): Observable<AxiosResponse<Rv>> {
    return from(axios.get<Rv>(`${this.baseURL}/${id}`));
  }

  createRv(Rv: Rv): Observable<AxiosResponse<Rv>> {
    return from(axios.post<Rv>(`${this.baseURL}/create`, Rv));
  }

  updateRv(id: number, Rv: Rv): Observable<AxiosResponse<Rv>> {
    return from(axios.put<Rv>(`${this.baseURL}/${id}`, Rv));
  }

  deleteRv(id: number): Observable<AxiosResponse<void>> {
    return from(axios.delete<void>(`${this.baseURL}/${id}`));
  }

  getCreneaux(): Observable<AxiosResponse<Creneaux[]>> {
    return from(axios.get<Creneaux[]>(this.creneauxURL));
  }

  getPatients(): Observable<AxiosResponse<Patient[]>> {
    return from(axios.get<Patient[]>(this.patientsURL));
  }
}
