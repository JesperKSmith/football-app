import { Injectable } from '@angular/core';
import { CanActivate, Router,  }    from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    return this.authenticationCheck();
  }


  authenticationCheck(): boolean{      
    if(this.authService.isLoggedIn){
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}
