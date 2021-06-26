import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor(public service:BloodDonorserviceService,private route:Router, private r:ActivatedRoute) { }

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

  cId=0;

  ngOnInit(): void {
    this.cId=this.r.snapshot.params.cid
    this.donor.category['cid']=this.cId;
  }

  formSubmit()
  {
    this.service.adddonor(this.donor).subscribe((data)=>{
      Swal.fire('Saved !!', 'User is Registered', 'success'
      ).then((result) => {
        
        if (result.isConfirmed) {
          this.route.navigate(['admin/']);
        } 
      })
    })
  }

}

