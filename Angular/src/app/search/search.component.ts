import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  username : string;
  user : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit() {
  }

  public findUserByUsername(){
    let response = this.service.getUserByUsername(this.username);
    response.subscribe(data => this.user = data);
  }

}
