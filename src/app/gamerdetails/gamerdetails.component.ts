import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamerdetails',
  templateUrl: './gamerdetails.component.html',
  styleUrls: ['./gamerdetails.component.css']
})
export class GamerdetailsComponent implements OnInit {

  public pregen="";
  public mgame="";
  public sgame="";
  public ogame="";
  public ygaming="";

  constructor() { }

  ngOnInit(): void {
  }

  SaveGamesDetails(pregen, mgame, sgame, ogame, ygaming){
    alert("New details created: "+ " Prefered game " + pregen + ' ' + " Main game "+ mgame + ' ' + " Secondary game " + sgame + ' ' + " Optional game " + ogame + ' ' + " Years gaming " + ygaming + ' ');
  }

}
