import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {


  allusers=[
    {
      id:'',
      username:'',
      authorities: [{authority:''}],
    }
  ]

  k:boolean=true;


  constructor(private alluser:UserService) { }

  ngOnInit(): void {
    this.alluser.allUsers().subscribe((data:any)=>{
      this.allusers=data;
      this.k=false;
     

    },
    (error)=>{
      console.log("error");
      Swal.fire("Error!!","error in loding data",'error');
    })
  }


  delete(id:any)
  {
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        this.alluser.deleteuser(id).subscribe((data)=>{
          this.allusers=this.allusers.filter((allUsers:any)=>allUsers.id!=id);
          Swal.fire("sucess!!",'Deleted','success');
        });
      } 
    })
  }

}
