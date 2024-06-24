import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'medecins',
        loadComponent: () => import('./components/medecin/medecin/medecin.component').then(m => m.MedecinComponent),
        children: [
          { path: '', loadComponent: () => import('./components/medecin/medecin-list/medecin-list.component').then(m => m.MedecinListComponent) },
          { path: 'create', loadComponent: () => import('./components/medecin/medecin-create/medecin-create.component').then(m => m.MedecinCreateComponent) },
          { path: 'edit/:id', loadComponent: () => import('./components/medecin/medecin-edit/medecin-edit.component').then(m => m.MedecinEditComponent) }
        ]
      },
      {
        path: 'patients',
        loadComponent: () => import('./components/patient/patient/patient.component').then(m => m.PatientComponent),
        children: [
          { path: '', loadComponent: () => import('./components/patient/patient-list/patient-list.component').then(m => m.PatientListComponent) },
          { path: 'create', loadComponent: () => import('./components/patient/patient-create/patient-create.component').then(m => m.PatientCreateComponent) },
          { path: 'edit/:id', loadComponent: () => import('./components/patient/patient-edit/patient-edit.component').then(m => m.PatientEditComponent) }
        ]
      },
      { path: 'creneaux', loadComponent: () => import('./components/creneaux/creneaux-list/creneaux-list.component').then(m => m.CreneauxListComponent) },
      { path: '', redirectTo: 'medecins', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
