import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD5295XoO-GFTI6kAMe6sL8Hvef5nhCy_E",
    authDomain: "movie-timex.firebaseapp.com",
    databaseURL: "https://movie-timex.firebaseio.com",
    projectId: "movie-timex",
    storageBucket: "movie-timex.appspot.com",
    messagingSenderId: "344702250796",
    appId: "1:344702250796:web:a1479d2e09d80b4d104689",
    measurementId: "G-GHR9VJC0RX"
      }
    )
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
