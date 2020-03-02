import { AppRoutingModule } from './../app-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyAccountComponent, MoviesComponent, NavbarComponent, LogoutComponent],
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  exports: [MyAccountComponent, MoviesComponent, NavbarComponent, LogoutComponent]
})
export class UserModule { }
