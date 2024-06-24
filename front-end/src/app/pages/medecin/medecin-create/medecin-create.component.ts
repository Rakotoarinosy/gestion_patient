import { Component, EventEmitter, Output } from '@angular/core';
import { Medecin } from '../../../entities/medecin';
import { MedecinService } from '../../../services/medecin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-medecin-create',
  standalone: true,
  imports: [FormsModule,DashboardComponent],
  templateUrl: './medecin-create.component.html',
  styleUrl: './medecin-create.component.scss'
})
export class MedecinCreateComponent {
  medecin: Medecin = new Medecin();
  @Output() medecinCreated = new EventEmitter<void>();

  constructor(private medecinService: MedecinService, private router: Router) { }

  saveMedecin() {
    this.medecinService.createMedicin(this.medecin).subscribe(() => {

      this.medecinCreated.emit();
      this.router.navigate(['dashboard/medecins']);
    });
  }

}
