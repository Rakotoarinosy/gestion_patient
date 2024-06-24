import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../../../services/medecin.service';
import { Router, RouterModule } from '@angular/router';
import { Medecin } from '../../../entities/medecin';
import { CommonModule } from '@angular/common';
import { MedecinCreateComponent } from '../medecin-create/medecin-create.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';


@Component({
  selector: 'app-medecin-list',
  standalone: true,
  imports: [CommonModule,MedecinCreateComponent,DashboardComponent,RouterModule],
  templateUrl: './medecin-list.component.html',
  styleUrl: './medecin-list.component.scss'
})
export class MedecinListComponent implements OnInit {

  medecins:Medecin[] = []

  constructor(
    private medecinService: MedecinService,
    private router: Router) { }

  ngOnInit() {
    this.loadMedecins()
  }

  loadMedecins() {
    this.medecinService.getMedecins().subscribe(
      reponse => {
        this.medecins = reponse.data;
      });
  }

  deleteMedecin(id: number | undefined) {
    if (id !== undefined) {
      const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce medecin?");
      if (confirmation) {
        this.medecinService.deleteMedecin(id).subscribe(() => {
          this.loadMedecins();
        });
      }
    }
  }

  createMedecin() {
    this.router.navigate(['dashboard/medecins/create']);
  }

  editMedecin(id: number | undefined) {
    if(id != undefined) {
      this.router.navigate(['dashboard/medecins/edit', id]);
    }
  }


}
