import { Component } from '@angular/core';
import { FranchiseService } from './services/franchise.service';
import { FranchiseModalComponent } from './franchise-modal/franchise-modal.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HomeComponent, FranchiseModalComponent]
})
export class AppComponent {
  title = 'Calibar';
  isFranchiseModalOpen = false;

  constructor(private franchiseService: FranchiseService) {}

  openFranchiseModal() {
    this.isFranchiseModalOpen = true;
  }

  closeFranchiseModal() {
    this.isFranchiseModalOpen = false;
  }
}