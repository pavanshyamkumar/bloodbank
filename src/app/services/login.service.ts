import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import baseurl from './helper';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //current user
  public getCurrentUser()
  {
    return this.http.get(`${baseurl}/current-user`);
  }

  //generate tocken

  public generatetocken(loginData:any)
  {
      return this.http.post(`${baseurl}/generate-token`,loginData);
  }

  //logi user: set token in locaL storage
  public loginUser(token:any)
  {
    localStorage.setItem('token',token);
    return true;
  }

  //is login :user is loginor mnoy
  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //logout

  public logOut()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token

  public getToken()
  {
    return localStorage.getItem('token');
  }

  //set userdetails


  public setUser(user:any)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getuser
 

 

  public getUser()
  {
    let userStr=localStorage.getItem('user');
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logOut();
      return null;
    }
  }

  public setUserupdate(user:any)
  {
    localStorage.removeItem('user');
    localStorage.setItem('user',JSON.stringify(user));

  }


  public getuserd()
  {
    let user=this.getUser()
    return user.id;
  }

  public getuserpassword()
  {
    let user=this.getUser()
    return user.password;
  }

  //getusername
  public getuserrname()
  {
    let user=this.getUser()
   
    return user.username;
  }
  //getfirstname

  public getfirstname()
  {
    let user=this.getUser();
    return user.firstName;
  }

  public getLastname()
  {
    let user=this.getUser();
    return user.lastName;

  }

  public getemail()
  {
    let user=this.getUser();
    return user.email;
  }

  public getphone()
  {
    let user=this.getUser()
    return user.phone;
  }




  //get user role
  public getUserRole()
  {
    let user=this.getUser()
    return user.authorities[0].authority;
  }
}
