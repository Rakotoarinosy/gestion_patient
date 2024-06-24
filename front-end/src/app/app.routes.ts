import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'medecins',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
          { path: '', loadComponent: () => import('./pages/medecin/medecin-list/medecin-list.component').then(m => m.MedecinListComponent) },
          { path: 'create', loadComponent: () => import('./pages/medecin/medecin-create/medecin-create.component').then(m => m.MedecinCreateComponent) },
          { path: 'edit/:id', loadComponent: () => import('./pages/medecin/medecin-edit/medecin-edit.component').then(m => m.MedecinEditComponent) }
        ]
      },
      {
        path: 'patients',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
          { path: '', loadComponent: () => import('./pages/patient/patient-list/patient-list.component').then(m => m.PatientListComponent) },
          { path: 'create', loadComponent: () => import('./pages/patient/patient-create/patient-create.component').then(m => m.PatientCreateComponent) },
          { path: 'edit/:id', loadComponent: () => import('./pages/patient/patient-edit/patient-edit.component').then(m => m.PatientEditComponent) }
        ]
      },
      { path: 'creneaux',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
      children: [
        { path: '', loadComponent: () => import('./pages/creneaux/creneaux-list/creneaux-list.component').then(m => m.CreneauxListComponent) },
      ]
      },
      { path: 'rvs',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
      children: [
        { path: '', loadComponent: () => import('./pages/rv/rv-list/rv-list.component').then(m => m.RvListComponent) },
        { path: 'create', loadComponent: () => import('./pages/rv/rv-create/rv-create.component').then(m => m.RvCreateComponent) },
      ]
      },
      { path: '', redirectTo: 'medecins', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
