import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';

@Component({
  selector: 'app-user-view-donordetails',
  templateUrl: './user-view-donordetails.component.html',
  styleUrls: ['./user-view-donordetails.component.css']
})
export class UserViewDonordetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BloodDonorserviceService) { }
  donor:any={
    category:{},
    name:'',
    age:'',
    address:'',
    phone:'',
    sampletakendate:'',
    city:'',
    state:'',
    sex:'',
  }
  dId=0;
  ngOnInit(): void {
    this.dId=this.route.snapshot.params.did;
    this.service.getdonorebyid(this.dId).subscribe((data)=>{
      this.donor=data;
    })
  }

}
