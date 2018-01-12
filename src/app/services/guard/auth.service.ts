import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = true;
  redirectUrl: string;  

  login(username: string, password: string) {   
    if(username === "admin" && password === "secret") {         
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);      
    }
    else {
      return Observable.of(false).delay(1000).do(val => this.isLoggedIn = false);
    }
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout() {
    return Observable.of(false).delay(500).do(val => this.isLoggedIn = false);
  }

}
