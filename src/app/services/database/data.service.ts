import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Club } from "../../classes/club";

import { Observable } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { of } from 'rxjs/observable/of';
import { User } from '../../classes/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};


@Injectable()
export class DataService {

  localData: Club[] = [];
  urlPrecursor: string = "http://localhost:8000/api/clubs";
  adminUrl: string = "http://localhost:8000/api/admin";
 
  

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Club[]> {
    return this.http.get(this.urlPrecursor).pipe(
        map((response: any[]) => {
        this.localData = response;        
        return this.localData;
      })
    ); 
  }


  public getClub(id: number): Club { 
    return this.localData.find(x => x.id === id);        
  }


  // public getClub(id: number): Observable<any> {
  //   console.log("getclub called");
  //   const url = `${this.urlPrecursor}/${id}`;
  //   return this.http.get(url).pipe(
  //     tap(_ => this.log(`fetched club id=${id}`)),
  //     catchError(this.handleError<Club>(`getClub id=${id}`))
  //   );
  // } 

  public createClub(club: Club) : Observable<any>  {
    club.iconPath = "assets/fc-helsingoer-icon.png";
    try {
      this.http.post(this.urlPrecursor, club)
      .subscribe( data => {
        return data;
      })      
    }
    catch(e) {
      return e;
    }
  }

  public deleteClub(club: Club) : Observable<any> {
    try {
      this.http.delete(this.urlPrecursor + `/${club.id}`)
      .subscribe( data => {
        return data;
      })
    }
    catch(e) {
      return e;
    }
    
  }

  public updateClub(club: Club) : Observable<any> {
    try {
      this.http.put(this.urlPrecursor + `/${club.id}`, club)
      .subscribe( data => {

        return this.localData.find(x => x.id === club.id) === data;
        // console.log("data returned:", data);
        
        // let index = this.localData.findIndex(x => x.id == club.id);
        // console.log("index is: ", index);

        // this.localData[index] === data;

        // console.log("localData is now:", this.localData);        
        
      })
    }
    catch(e) {
      return e;
    }    
  }

  
}