import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:CategoriesService,private _route:Router) { }

  cId=0;

  getdata:any=[]

  ngOnInit(): void {
    this.cId=this.route.snapshot.params.cid;
    this.service.getCateoriesbyid(this.cId).subscribe((data)=>{
      this.getdata=data;
      
    })
    

  }

  submit()
  {
    this.service.updatecateory(this.getdata).subscribe((data)=>{
     
      
      Swal.fire('Saved !!', 'User is updated', 'success'
      ).then((result) => {
        
        if (result.isConfirmed) {
          this._route.navigate(['admin/viewcategories']);
        } 
      }) 
    },
    (error)=>{
      Swal.fire("Error!!","something went wrong..",'error');
    })
  }

}
