import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamercreation',
  templateUrl: './gamercreation.component.html',
  styleUrls: ['./gamercreation.component.css']
})
export class GamercreationComponent implements OnInit {

  public newGamer='';
  public email='';
  public password='';

  constructor() { }

  ngOnInit(): void {
  }

  SaveNewUser(newGamer, email ,password){
    alert("New gamer register:  " + " Gamer name:  " + newGamer + '  Email:  ' + email + '  Password:  ' + password + ' ');

  }

}
