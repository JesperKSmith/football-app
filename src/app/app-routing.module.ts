import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SuperligaenComponent } from './components/superligaen/superligaen.component';
import { ClubDetailsComponent } from './components/club-details/club-details.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './services/guard/auth-guard.service';


const routes: Routes = [
  { path: 'superligaen', component: SuperligaenComponent },
  { path: 'details/:id', component: ClubDetailsComponent },
  { path: 'details/edit/:id', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: LoginComponent },
  { path: 'admin/new', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'superligaen',  pathMatch: 'full'},
  { path: '**',redirectTo: 'superligaen' }  
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes, 
      { enableTracing: false } // Debugging = true
    ), 
    HttpClientModule 
  ],
  exports: [ 
    RouterModule 
  ],
  providers: [ HttpClient]
})
export class AppRoutingModule {
  

 }
