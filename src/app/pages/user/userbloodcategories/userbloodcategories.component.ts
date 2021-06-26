import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-userbloodcategories',
  templateUrl: './userbloodcategories.component.html',
  styleUrls: ['./userbloodcategories.component.css']
})
export class UserbloodcategoriesComponent implements OnInit {

  constructor(private service:CategoriesService) { }

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

}
