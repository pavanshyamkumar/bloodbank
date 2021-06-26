import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar,private login:LoginService,private route:Router) { }


   k:boolean=false;


  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log("login button clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username=='')
    {
        this.snack.open("UserName is Required",'',{duration:3000})
        this.k=false;
        return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password=='')
    {
        this.snack.open("Password is Required",'',{duration:3000})
        this.k=false;
        return;
    }

    //request to server generate tocken
    this.login.generatetocken(this.loginData).subscribe(
      (data:any)=>{
        console.log("sucess")
        console.log(data);
        this.k=false;
        //login
        this.login.loginUser(data.tocken);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //reditect  dashboard

            if(this.login.getUserRole()=="ADMIN")
            {
              //admin
              this.route.navigate(['admin']);
            }else if(this.login.getUserRole()=="NORMAL")
            {
              //normal dash
              this.route.navigate(['user']);
            }
            else{
              this.login.logOut();
              
            }
            
          }
        )

      },
      (error)=>{
        console.log("error came");
        console.log(error);
        this.k=false;
        this.snack.open("INVALID DETAILS !!",'ok',{duration:3000});

      }
      );
    



  }
  toogle()
  {
    this.k=true;
  }

}
