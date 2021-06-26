
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedonor',
  templateUrl: './updatedonor.component.html',
  styleUrls: ['./updatedonor.component.css']
})
export class UpdatedonorComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BloodDonorserviceService ,private _route:Router) { }
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


  formSubmit(){
    this.service.updatedonor(this.donor).subscribe((data)=>{
      Swal.fire('Saved !!', 'User is updated', 'success'
      ).then((result) => {
        
        if (result.isConfirmed) {
          this._route.navigate(['admin/']);
        } 
      }) 
    })
  }



}
