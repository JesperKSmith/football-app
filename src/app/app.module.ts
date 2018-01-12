
/****************************************/ 
/*               Modules                */
/****************************************/ 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/****************************************/ 
/*              Services                */
/****************************************/ 
import { DataService } from './services/database/data.service';
import { AuthService } from './services/guard/auth.service';
import { AuthGuard } from './services/guard/auth-guard.service';

/****************************************/ 
/*              Components              */
/****************************************/ 
import { AppComponent } from './app.component';
import { SuperligaenComponent } from './components/superligaen/superligaen.component';
import { ClubDetailsComponent } from './components/club-details/club-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperligaenComponent,
    ClubDetailsComponent,
    AdminComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
