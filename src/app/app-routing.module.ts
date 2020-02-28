import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './user/my-account/my-account.component';
import { MoviesComponent } from './user/movies/movies.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: 'profile', component: MyAccountComponent},
  {path:'movies', component: MoviesComponent},
  {path: 'login',component: LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
