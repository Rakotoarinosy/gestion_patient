import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../../Entity/medecin';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../../../services/medecin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medecin-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './medecin-edit.component.html',
  styleUrl: './medecin-edit.component.scss'
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
      this.router.navigate(['/medecins']);
    });
  }

  updateMedecin() {
    this.medecinService.updateMedecin(this.id, this.medecin).subscribe(() => {
      this.router.navigate(['/medecins']);
    });
  }
}
