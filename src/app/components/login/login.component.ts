import { Component } from '@angular/core';
import { AuthService } from '../../services/guard/auth.service';
import { Router } from "@angular/router";
import { User } from '../../classes/user';

// import { AlertService } from "../../services/alert-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  

    public username: string;
    
  constructor(
    public authService: AuthService, 
    // private alert: AlertService, 
    private router: Router) {
  }


  //------------------------------------------------
  // Login
  login(username: string, password: string) {
    this.authService.login(username, password)    
      .subscribe(() => {        
        if(this.authService.isLoggedIn) {
          this.router.navigate(['superligaen']);
          // this.alert.success("Access granted", "welcome");
        }
      })
  }

  logout() {
    this.authService.logout()
      .subscribe(response => {
        if(!response) {
          this.router.navigate(['superligaen']);
        }
      })
  }
}