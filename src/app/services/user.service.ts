import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  //add user

  public addUser(user:any)
  {
    return this.http.post(`${baseurl}/user/`,user);
  }

  public updateUser(userupdate:any)
  {
    return this.http.put(`${baseurl}/user/user/update`,userupdate);
  }

  public allUsers()
  {
    return this.http.get(`${baseurl}/user/all`);
  }


  public getUser(id:any)
  {
      return this.http.get(`${baseurl}/user/getuser/${id}`);
  }

  public deleteuser(id:any)
  {
    return this.http.delete(`${baseurl}/user/${id}`);
  }



}
