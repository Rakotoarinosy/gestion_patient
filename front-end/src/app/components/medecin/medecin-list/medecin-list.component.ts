import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../../../services/medecin.service';
import { Router } from '@angular/router';
import { Medecin } from '../../../Entity/medecin';
import { CommonModule } from '@angular/common';
import { MedecinCreateComponent } from '../medecin-create/medecin-create.component';


@Component({
  selector: 'app-medecin-list',
  standalone: true,
  imports: [CommonModule,MedecinCreateComponent],
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
      } else {
        console.log("Suppression annulée.");
      }
    } else {
      console.log("ID non défini, impossible de supprimer.");
    }
  }

  createMedecin() {
    this.router.navigate(['create-medecin']);
  }

  editMedecin(id: number | undefined) {
    if(id != undefined) {
      this.router.navigate(['medecin/edit', id]);
    } else{
      console.log("Editer")
    }
  }


}
