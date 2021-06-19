import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public gamername;
  public email;
  public password;
  public rightgamer='Vane';
  public rightpassword='123';

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  loginMethod(gamername, password){
    if (gamername==this.rightgamer && password==this.rightpassword) {
      this.router.navigate(['home'])
    } else {
      alert("Wrong Gamer/Password");
    }
  }

}
