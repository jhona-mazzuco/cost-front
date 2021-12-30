import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CostCenterCreateComponent } from "./components/cost-center-create/cost-center-create.component";
import { CenterService } from "./services/center.service";

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.scss'],
})
export class CostCenterComponent implements OnInit {
  loading!: boolean;
  centers!: any[];

  constructor(private dialog: MatDialog, private service: CenterService) {
  }

  ngOnInit(): void {
    this.findCenters();
  }

  openRegister() {
    const modalRef = this.dialog.open(CostCenterCreateComponent, {
      width: '350px'
    });

    modalRef.afterClosed().subscribe({
      next: name => name && this.onRegisterNewCenter(name),
    });
  }
  onRegisterNewCenter(name: string): void {
    this.service.register(name).subscribe({
      next: this.findCenters
    })
  }

  findCenters(): void {
    this.service.findAll().subscribe({
      next: (centers) => this.centers = centers
    });
  }
}

