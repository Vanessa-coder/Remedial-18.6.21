import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  postMethod() {
    let dataToSend = {
      "firstname": "I. Vanessa",
      "lastname": "Valenzuela Flores"
    }
    
    this.api.postToAPi(dataToSend).subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

  getMethod() {
    this.api.getFromApi().subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

}

