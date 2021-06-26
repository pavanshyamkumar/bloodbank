import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonorserviceService } from 'src/app/services/blood-donorservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-donors',
  templateUrl: './view-donors.component.html',
  styleUrls: ['./view-donors.component.css']
})
export class ViewDonorsComponent implements OnInit {


  
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



  delete(did:any)
  {

    this.service.deletedonor(did).subscribe((data)=>{
      console.log("sucesss");
      
    })
    
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
