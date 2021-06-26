import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  constructor(private login:LoginService,private userService:UserService,private snack:MatSnackBar,private route:Router) { }
  user:any=this.login.getUser;
 

  ngOnInit(): void {
    this.user=this.login.getUser()
   
  }
  public userupdate={
    id:this.login.getuserd(),
    username:this.login.getuserrname(), 
    firstName:this.login.getfirstname(),
    lastName:this.login.getLastname(),
    email:this.login.getemail(),
    phone:this.login.getphone(),
  }
  
 

  

  formSubmit()
  {
    
    if(this.userupdate.username=='' || this.userupdate.username==null)

    {
      this.snack.open("Username is required!!",'',{duration:3000,});
      return;
    }

    //validate


    //add user
    this.userService.updateUser(this.userupdate).subscribe(
      (data)=>{
        //sucesss
        console.log(data)
       
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
      }
     
      );
        
        Swal.fire('Saved !!', 'User is updated', 'success'
        ).then((result) => {
          
          if (result.isConfirmed) {
            this.route.navigate(['user-dashboard/profile']);
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
