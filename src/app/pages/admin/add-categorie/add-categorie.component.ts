import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  category={
    title:'',
    description:''
  }
  constructor(private cat:CategoriesService,private route:Router) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.category.title.trim()=='' || this.category.title==null)
    {

      return ;
    }

   

    this.cat.addcateories(this.category).subscribe((data:any)=>{
      this.category.title='';
      this.category.description='';
      
        Swal.fire("Sucess!!",'Added sucessfully','success');
    },
    (error)=>{
      console.log("error");
    })


  }

}
