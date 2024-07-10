
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDonationComponentComponent } from './add-donation-component/add-donation-component.component';
import { DonorsComponent } from './donors/donors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDonationComponentComponent,
    DonorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,           // Ajoutez FormsModule
    ReactiveFormsModule    // Ajoutez ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
