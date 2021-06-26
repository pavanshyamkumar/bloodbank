import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.login.logOut();
    
    window.location.reload();
  }

}
