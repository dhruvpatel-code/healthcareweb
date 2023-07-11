import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // Import both HttpClient and HttpParams
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'https://localhost:44314/api/Patient'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getPatients(pageNumber: number, searchQuery: string): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString()) // Set the pageNumber parameter
      .set('searchQuery', searchQuery || ''); // Set the searchQuery parameter, use empty string if not provided

    return this.http.get<any>(`${this.apiUrl}`, { params }); // Make the GET request with the parameters
  }
}

