import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-add-donation-component',
  templateUrl: './add-donation-component.component.html',
  styleUrls: ['./add-donation-component.component.css'],
})
export class AddDonationComponentComponent implements OnInit {
  donationForm: FormGroup;

  constructor(
    private donationService: DonationService,
    private fb: FormBuilder
  ) {
    const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    this.donationForm = this.fb.group({
      amount: ['', Validators.required],
      donationDate: [today, Validators.required],
      donor: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.donationForm.valid) {
      const donationData = this.donationForm.value;
      console.log('Donation Data:', donationData);
      this.donationService.addDonation(donationData).subscribe(
        (response) => {
          console.log('Donation added successfully:', response);
        },
        (error) => {
          console.error('Error adding donation:', error);
          // Handle error (e.g., show error message to user)
        }
      );
    }
  }
}
