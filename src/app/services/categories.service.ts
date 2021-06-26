import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  public getcateories()
  {
      return this.http.get(`${baseurl}/category/`)
  }

  public addcateories(category:any)
  {
      return this.http.post(`${baseurl}/category/`,category);
  }

  public del(cid:any)
  {
    return this.http.delete(`${baseurl}/category/${cid}`)

  }

  public getCateoriesbyid(cid:any)
  {
    return this.http.get(`${baseurl}/category/${cid}`);
  }

  public updatecateory(category:any)
  {
    return this.http.put(`${baseurl}/category/`,category);
  }
}

