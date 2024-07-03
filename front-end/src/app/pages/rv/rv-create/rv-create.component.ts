import { Component, OnInit } from '@angular/core';
import { RvService } from '../../../services/rv.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Patient } from '../../../entities/patient';
import { Creneaux } from '../../../entities/creneaux';

@Component({
  selector: 'app-rv-create',
  standalone: true,
  imports: [FormsModule, DashboardComponent, CommonModule],
  templateUrl: './rv-create.component.html',
  styleUrls: ['./rv-create.component.scss']
})
export class RvCreateComponent implements OnInit {

  rendezvous = {
    jour: new Date(),
    client: '',
    creneau: '',
    horaires: '',
  };

  clients: Patient[] = [];
  creneaux: Creneaux[] = [];
  horaires: string[] = [];

  constructor(private rvService: RvService) { }

  ngOnInit(): void {
    this.rvService.getPatients().subscribe(reponse => {
      this.clients = reponse.data;
    });

    this.rvService.getCreneaux().subscribe(reponse => {
      this.creneaux = reponse.data;
    });
  }

  onMedecinChange(event: any) {
    const selectedMedecinId = event.target.value;
    console.log(`selectedMedecinId ${selectedMedecinId}`)
    const filteredCreneaux = this.creneaux.filter(creneau => creneau.medecin && creneau.medecin.id === selectedMedecinId);
    console.log(`filteredCreneaux = ${filteredCreneaux}`)
    const horairesArray = filteredCreneaux.map(creneau => creneau.horaires).filter(horaire => horaire !== undefined);
    console.log(`horairesArray ${horairesArray}`)
    this.horaires = horairesArray.flat().filter(horaire => horaire !== undefined) as string[];
    console.log(this.horaires)
  }

  handleSubmit() {
    this.rvService.createRv(this.rendezvous).subscribe(response => {
      console.log('Rendezvous created', response);
    });
  }

}
