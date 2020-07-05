import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guarding
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo }
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
