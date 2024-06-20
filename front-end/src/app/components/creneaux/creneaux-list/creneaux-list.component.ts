import { Component } from '@angular/core';
import { CreneauxService } from '../../../services/creneaux.service';
import { Creneaux } from '../../../Entity/creneaux';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creneaux-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creneaux-list.component.html',
  styleUrl: './creneaux-list.component.scss'
})
export class CreneauxListComponent {
  creneaux: Creneaux[] = [];

  constructor(private creneauxService: CreneauxService) { }

  ngOnInit(): void {
    this.loadCreneaux();
  }

  loadCreneaux(): void {
    this.creneauxService.getCreneaux().subscribe(response => {
      this.creneaux = response.data;
    });
  }

  deleteCreneau(id: number | undefined): void {
    if (id != undefined) {
      this.creneauxService.deleteCreneau(id).subscribe(() => {
        this.loadCreneaux();
      });
    } else {
      console.log("ID non défini, impossible de supprimer.");
    }
  }

}
