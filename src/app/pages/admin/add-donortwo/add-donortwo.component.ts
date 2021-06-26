
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-donortwo',
  templateUrl: './add-donortwo.component.html',
  styleUrls: ['./add-donortwo.component.css']
})
export class AddDonortwoComponent implements OnInit {



  donor:any={
    category:{
      cid:'',
    },
    name:'',
    age:'',
    address:'',
    phone:'',
    sampletakendate:'',
    city:'',
    state:'',
    sex:'',
  }
  categories:any=[
   
  ]
  constructor(private ser:CategoriesService,private service:BloodDonorserviceService,private route:Router) { }

  ngOnInit(): void {
    this.ser.getcateories().subscribe((data)=>{
      this.categories=data;
    })
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
