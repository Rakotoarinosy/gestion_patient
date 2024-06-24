import { Component, EventEmitter, Output } from '@angular/core';
import { Rv } from '../../../entities/rv';
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
  imports: [FormsModule,DashboardComponent,CommonModule],
  templateUrl: './rv-create.component.html',
  styleUrl: './rv-create.component.scss'
})
export class RvCreateComponent {
  rv: Rv = new Rv();
  patients: Patient[] = [];
  creneaux: Creneaux[] = [];
  horaires: string[] = [];
  @Output() rvCreated = new EventEmitter<void>();

  constructor(private rvService: RvService, private router: Router) { }

  ngOnInit() {
    // this.loadPatients();
    // this.loadCreneaux()
  }

  /*loadPatients() {
    this.rvService.getPatients().subscribe(
      reponse => {
        this.patients = reponse.data;
      });
  }

  loadCreneaux() {
    this.rvService.getCreneaux().subscribe(
      reponse => {
        this.patients = reponse.data;
      });
  }*/

  saveRv() {
    this.rvService.createRv(this.rv).subscribe(() => {

      this.rvCreated.emit();
      this.router.navigate(['dashboard/medecins']);
    });
  }

}
