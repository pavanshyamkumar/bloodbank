import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BloodDonorserviceService {

  constructor(private http:HttpClient) { }

  public getdonors(cid:any)
  {
      return this.http.get(`${baseurl}/donor/category/${cid}`);
  }

  public adddonor(donor:any)
  {
      return this.http.post(`${baseurl}/donor/`,donor);
  }

  public getalldonors()
  {
    return this.http.get(`${baseurl}/donor/`)
  }

  public getdonorebyid(did:any)
  {
    return this.http.get(`${baseurl}/donor/${did}`);
  }

  public updatedonor(donor:any)
  {
    return this.http.put(`${baseurl}/donor/`,donor);
  }

  public deletedonor(did:any)
  {
    return this.http.delete(`${baseurl}/donor/${did}`);
  }
}

