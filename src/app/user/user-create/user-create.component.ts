import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  
  user : User = {
    userId : 0,
    username :  "",
    email : "",
    creationDate : "",
    isActive : false
  }

  constructor(private userService: UserService, private router: Router) {
    if(this.userService.getUsers().length === 0)
      this.userService.setUsers();

  }

  handleCreateClick() {
    this.user.userId = this.userService.getUsers()[this.userService.userCount() - 1].userId + 1 ;
    if(this.user.username === "" || this.user.email === "" || this.user.creationDate === "")
      alert("Fill the empty spaces.")
    else if(this.userService.checkOfUsersIsUnique(this.user.username,this.user.email,this.user.userId)===false)
      alert("This user already exist.")
    else {
      this.userService.createUser(this.user);
      this.router.navigateByUrl('/userlist');
    } 

  }

  handleCancelClick() {
    this.router.navigateByUrl("/userlist");
  }

}
