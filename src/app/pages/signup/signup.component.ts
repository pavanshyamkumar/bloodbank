
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private route:Router) { }


  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  }
  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)

    {
      this.snack.open("Username is required!!",'',{duration:3000,});
      return;
    }

    //validate


    //add user
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //sucesss
        console.log(data)
        //alert("sucess");
       
        //sweet alert
        Swal.fire('Saved !!', 'User is Registered', 'success'
        ).then((result) => {
          
          if (result.isConfirmed) {
            this.route.navigate(['login']);
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
