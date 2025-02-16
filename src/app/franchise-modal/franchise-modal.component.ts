import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FranchiseService } from '../services/franchise.service';

@Component({
  selector: 'app-franchise-modal',
  templateUrl: './franchise-modal.component.html',
  styleUrls: ['./franchise-modal.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FranchiseModalComponent {
  
  //ID13. @Input e @Output
  @Output() close = new EventEmitter<void>();

  franchiseForm: FormGroup;
  isSubmitting = false;
  submissionError = '';
  /*additionalInfo = '';
  isFranchiseModalOpen = false;
  private subscription: Subscription;*/

  //ID21. REGEX
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.franchiseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /* ID12. Criar comunicação entre diferentes componentes não relacionados hierarquicamente
  this.subscription = this.franchiseService.franchiseModalOpen$.subscribe(
    isOpen => this.isFranchiseModalOpen = isOpen
  );
  }*/

  
  get name() {
    return this.franchiseForm.get('name');
  }

  get phone() {
    return this.franchiseForm.get('phone');
  }

  get email() {
    return this.franchiseForm.get('email');
  }

  onSubmit() {
    if (this.franchiseForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submissionError = '';

    //ID23. Promisses
    this.http.post('https://your-api-endpoint.com/franchise', this.franchiseForm.value)
      .toPromise()
      .then(response => {
        console.log('Form submitted successfully', response);
        this.isSubmitting = false;
        this.onClose(); // Close the modal after successful submission
      })
      .catch(error => {
        console.error('Error submitting form', error);
        this.submissionError = 'There was an error submitting the form. Please try again later.';
        this.isSubmitting = false;
      });
  }

  onClose() {
    this.close.emit();
  }
}