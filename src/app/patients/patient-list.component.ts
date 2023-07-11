import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent implements OnInit {
  patients: any[] = []; // Array to store the patient data
  pageNumber: number = 1; // Current page number
  morePagesAvailable: boolean = false; // Flag to track if more pages are available
  searchQuery: string = ''; // Search query string

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients(); // Load patients data on component initialization
  }

  search() {
    this.pageNumber = 1; // Reset the page number when performing a new search
    this.loadPatients(); // Load patients data with the updated search query
  }

  loadPatients() {
    this.patientService.getPatients(this.pageNumber, this.searchQuery).subscribe({
      next: (response: any) => {
        this.patients = response.data; // Store the patient data in the patients array
        this.morePagesAvailable = response.more; // Update the flag for more pages availability
      },
      error: (error) => {
        console.error(error); // Log any errors that occur during the API request
      },
    });
  }

  nextPage() {
    if (this.morePagesAvailable) {
      this.pageNumber++; // Increment the page number
      this.loadPatients(); // Load the next page of patients data
    }
  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--; // Decrement the page number
      this.loadPatients(); // Load the previous page of patients data
    }
  }
}









