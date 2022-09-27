import { Component, OnInit } from '@angular/core';
import{User} from '../Models/User.moudle';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  {

   user:User ={ 
     id: 1,
    Name:"Nour",
    Age:15,
    Dob:"2022-01-01"
  }

 

}

