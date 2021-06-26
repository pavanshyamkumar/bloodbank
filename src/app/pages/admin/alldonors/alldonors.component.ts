import { Component, OnInit } from '@angular/core';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldonors',
  templateUrl: './alldonors.component.html',
  styleUrls: ['./alldonors.component.css']
})
export class AlldonorsComponent implements OnInit {

  constructor(private service:BloodDonorserviceService) { }
  getdata:any=[
    {
      category:{cid:''},
      name:'',
      sampletakendate:'',
      noofdaystoexpire:'',
      sex:'',
    },
    
  ]

  k:boolean=true;
  ngOnInit(): void {
    this.service.getalldonors().subscribe((data)=>
    {
      this.getdata=data;
      this.k=false;
    })
  }

  delete(did:any)
  {

    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        this.service.deletedonor(did).subscribe((data)=>{
          this.getdata=this.getdata.filter((getdata:any)=>getdata.did!=did)
          Swal.fire("sucess!!",'Deleted','success');
        });
      } 
    })
     
  }

}
