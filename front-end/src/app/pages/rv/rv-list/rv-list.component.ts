import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RvService } from '../../../services/rv.service';
import { Rv } from '../../../entities/rv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rv-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rv-list.component.html',
  styleUrl: './rv-list.component.scss'
})
export class RvListComponent {
  rvs: Rv[] = [];

  constructor(private rvService: RvService, private router: Router) { }

  ngOnInit(): void {
    this.loadRv();
  }

  loadRv(): void {
    this.rvService.getRvs().subscribe(response => {
      this.rvs = response.data;
    });
  }

  createRv() {
    this.router.navigate(['dashboard/rvs/create']);
  }

  deleteRv(id: number | undefined) {
    if (id !== undefined) {
      const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette Rendez-vous?");
      if (confirmation) {
        this.rvService.deleteRv(id).subscribe(() => {
          this.loadRv();
        });
      }
    }
  }
}
