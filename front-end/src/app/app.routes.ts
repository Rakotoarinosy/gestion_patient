import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'create-patient', loadComponent: () => import('./components/patient/patient-create/patient-create.component').then(m => m.PatientCreateComponent) },
  { path: 'patients', loadComponent: () => import('./components/patient/patient-list/patient-list.component').then(m => m.PatientListComponent) },
  { path: 'patient/edit/:id', loadComponent: () => import('./components/patient/patient-edit/patient-edit.component').then(m => m.PatientEditComponent) }, // Route for editing a patient
  { path: 'create-medecin', loadComponent: () => import('./components/medecin/medecin-create/medecin-create.component').then(m => m.MedecinCreateComponent) },
  { path: 'medecins', loadComponent: () => import('./components/medecin/medecin-list/medecin-list.component').then(m => m.MedecinListComponent) },
  { path: 'medecin/edit/:id', loadComponent: () => import('./components/medecin/medecin-edit/medecin-edit.component').then(m => m.MedecinEditComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: '', redirectTo: '/medecins', pathMatch: 'full' }
];
