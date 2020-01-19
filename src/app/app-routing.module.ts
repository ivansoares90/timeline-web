import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { TimelineComponent } from './pages/timeline/timeline.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
