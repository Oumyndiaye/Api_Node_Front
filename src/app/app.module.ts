import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddChickenComponent } from './add-chicken/add-chicken.component';
import { AppRoutingModule } from './app-routing.module';
import { ListChickenComponent } from './list-chicken/list-chicken.component';
import { DetailsChickenComponent } from './details-chicken/details-chicken.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ChickenService } from './service/chicken.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddChickenComponent,
    ListChickenComponent,
    DetailsChickenComponent,
    HeaderComponent,
    EditComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [ChickenService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
