import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../../classes/club';
import { DataService } from '../../services/database/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { KeysPipe } from  '../keys-pipe/keys-pipe.component';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  ngOnInit(): void {
  }

  public club: Club;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router,
  ){
    


    route.params.subscribe( params => {
      let id: number = +params['id'];
      if(id) {
        this.club = Object.assign({}, this.data.getClub(id));
      }
      else {
        this.club = new Club();
      }
    });
  }

  submitChanges(form) {
    if(form.valid){
      if(this.club.id) { // edit
        this.data.updateClub(this.club);
        setTimeout(() => {
          this.router.navigate(['/superligaen']);
        }, 1000);      
         
     
      }
      else {
        console.log("submitting new club", this.club);
        this.data.createClub(this.club);
        setTimeout(() => {
          this.router.navigate(['superligaen']);
        }, 2000);      
      }      
    }
  }

  deleteClub(club) {
    if (window.confirm("Are you sure?")) {
      this.data.deleteClub(club);
      let index = this.data.localData.findIndex(model => model.id === club.id);
      this.data.localData.splice(index, 1);
      setTimeout(() => {
        this.router.navigate(['superligaen']);
      }, 1000); 
    }
    
  }

  isNumber(val) {
    console.log("numberval", Number(val));
    if(!isNaN(val)) {
      console.log("returning true");
      return true;
      
    }
    console.log("returning false");
    return false;
    
    
  }
}

