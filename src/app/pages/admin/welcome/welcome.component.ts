import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import { UserService } from 'src/app/services/user.service';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog:MatDialog,private serve:UserService,private _ser:BloodDonorserviceService) { }

  users:any=[];
  c=0;

  donors:any=[];
  d=0;

  e=0;


  ngOnInit(): void {
    this.serve.allUsers().subscribe((data)=>{
      this.users=data;
      this.c=this.users.length-1;
    })
    this._ser.getalldonors().subscribe((data)=>{
      this.donors=data;
      console.log(data);
      this.d=this.donors.length;
      for(let i=0;i<this.donors.length;i++)
       {
         
          if(this.donors[i].noofdaystoexpire<0)
          {
            this.e=this.e+1

          }
       }
       console.log(this.e);

   
    })

    



    
  }
  opendialog()
  {
    this.dialog.open(AddCategorieComponent);
  }


}
