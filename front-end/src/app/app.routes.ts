import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientEditComponent } from './components/patient/patient-edit/patient-edit.component';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';
import { MedecinCreateComponent } from './components/medecin/medecin-create/medecin-create.component';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'create-patient', component: PatientCreateComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patient/edit/:id', component: PatientEditComponent }, // Route for editing a patient
  { path: 'create-medecin', component: MedecinCreateComponent },
  { path: 'medecins', component: MedecinListComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'medecin/edit/:id', component: MedecinEditComponent },
  { path: '', redirectTo: '/medecins', pathMatch: 'full' }
];
