import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';

@Component({
  selector: 'app-user-view-donors',
  templateUrl: './user-view-donors.component.html',
  styleUrls: ['./user-view-donors.component.css']
})
export class UserViewDonorsComponent implements OnInit {


  Ctitle:any;
  getdata:any=[
    {
      did:'',
      name:'',
      sampletakendate:'',
      noofdaystoexpire:'',
      sex:'',
    }
  ]
  constructor(private route:ActivatedRoute, private service:BloodDonorserviceService) { }
  cid=0;
  ngOnInit(): void {
    this.cid=this.route.snapshot.params.cid;
    this.Ctitle=this.route.snapshot.params.title;
    this.service.getdonors(this.cid).subscribe((data)=>{
      this.getdata=data;
     
     
    })
  }

}
