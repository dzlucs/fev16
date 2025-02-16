import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FranchiseService {
  private franchiseModalOpenSubject = new BehaviorSubject<boolean>(false);
  franchiseModalOpen$ = this.franchiseModalOpenSubject.asObservable();

  openFranchiseModal() {
    this.franchiseModalOpenSubject.next(true);
  }

  closeFranchiseModal() {
    this.franchiseModalOpenSubject.next(false);
  }
}