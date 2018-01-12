import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Club } from '../../classes/club';
import { DataService } from '../../services/database/data.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/guard/auth.service';





@Component({
  selector: 'app-superligaen',
  templateUrl: './superligaen.component.html',
  styleUrls: ['./superligaen.component.css']
})
export class SuperligaenComponent implements OnInit {

  public clubs: any[];

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router,
    private authService: AuthService,
  ){
    this.data.getAll().subscribe((data: any[]) => {
      this.clubs = data;
    })
  }

  ngOnInit() {  
  }
  

























  colorRows(id) {
    if(document.getElementsByTagName){        
      var table = document.getElementById(id);  
      var rows = table.getElementsByTagName("tr");
      for(let i = 0; i <= this.clubs.length; i++){          
        if(i % 2 == 0){
          rows[i].className = "evenrowcolor";
        }else{
          rows[i].className = "oddrowcolor";
        }      
      }
    }
  }
}
