import { Component, OnInit } from '@angular/core';


import { CategoriesService } from 'src/app/services/categories.service';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-categories',
  templateUrl: './blood-categories.component.html',
  styleUrls: ['./blood-categories.component.css']
})
export class BloodCategoriesComponent implements OnInit {

  constructor(private service:CategoriesService, private dialog:MatDialog) { }

  categories=[
    {
      cid:'',
      title:'',
      description:'',
    }
  ]

  k:boolean=true;


  ngOnInit(): void {

    this.service.getcateories().subscribe((data:any)=>{
      this.k=false;
      this.categories=data;
      console.log("sucess");
    },
    (error)=>{
      console.log(error);
    })
  }

  oncreate()
  {
      this.dialog.open(AddCategorieComponent);
  }


  delete(cid:any)
  {

    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        this.service.del(cid).subscribe((data)=>{
          this.categories=this.categories.filter((category)=>category.cid!=cid)
          Swal.fire("sucess!!",'Deleted','success');
        });
      } 
    })
     
  }

}

