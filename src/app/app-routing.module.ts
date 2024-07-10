import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonationComponentComponent } from './add-donation-component/add-donation-component.component';
import { DonorsComponent } from './donors/donors.component';

const routes: Routes = [
  { path: 'add-donation', component: AddDonationComponentComponent },
  { path: 'donors', component: DonorsComponent },
  { path: '', redirectTo: '/add-donation', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
