import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patients/patient-list.component';

const routes: Routes = [
  { path: 'patient', component: PatientListComponent },
  { path: '', redirectTo: 'patient', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'patient' } // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

