import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.css']
})
export class AdminUpdateUserComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private user:UserService,private login:LoginService,private userService:UserService,private snack:MatSnackBar,private route:Router) { }

  id=0;
  userup:any=[
    
  ]

  ngOnInit(): void {
    this.id=this._route.snapshot.params.id;
    this.user.getUser(this.id).subscribe((data)=>{
      this.userup=data;
      console.log(data);
    })

    
  }

  formSubmit()
  {
    
    
    //validate


    //add user
    this.userService.updateUser(this.userup).subscribe(
      (data)=>{
        //sucesss
        console.log(data)
       
        
        
        Swal.fire('Saved !!', 'User is updated', 'success'
        ).then((result) => {
          
          if (result.isConfirmed) {
            this.route.navigate(['admin/viewusers']);
          } 
        }) 
      },
      (error)=>{
        //error


        console.log(error);
        //alert("somthing went wrong");
        Swal.fire('Oops', 'Somthing Went Wrong!!', 'error');
      }
    )


  }
  


}
