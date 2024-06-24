import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../entities/medecin';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedecinService } from '../../../services/medecin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from "../../../components/dashboard/dashboard.component";

@Component({
    selector: 'app-medecin-edit',
    standalone: true,
    templateUrl: './medecin-edit.component.html',
    styleUrl: './medecin-edit.component.scss',
    imports: [CommonModule, FormsModule, DashboardComponent,RouterModule]
})
export class MedecinEditComponent implements OnInit {
  id: number = 0;
  medecin: Medecin = new Medecin();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medecinService: MedecinService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.medecinService.getMedecin(this.id).subscribe(response => {
      this.medecin = response.data;
    });
  }

  saveMedecin() {
    this.medecinService.createMedicin(this.medecin).subscribe(() => {
      this.router.navigate(['/dashboard/medecins']);
    });
  }

  updateMedecin() {
    this.medecinService.updateMedecin(this.id, this.medecin).subscribe(() => {
      this.router.navigate(['/dashboard/medecins']);
    });
  }
}
