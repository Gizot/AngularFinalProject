import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { PostService } from 'src/app/post/post.service';
import { RemarkService } from 'src/app/remark/remark.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
 
  users: User[] = [];

  userId : number = 0;
  username : string = "";
  email : string = "";
  creationDate : string = "";
  isActive : boolean = false;
  editMode : boolean = false;


  constructor(private userService : UserService, private postService : PostService,
    private remarkService : RemarkService ) {
    if (this.userService.getUsers().length === 0)
    this.userService.setUsers();
    else
    this.users = this.userService.getUsers();
    if(this.postService.getPost().length === 0)
    this.postService.setPost();
    if(this.remarkService.getRemarks().length === 0 )
    this.remarkService.setRemarks();
  }
  handleEditClick($event: number): void {
    this.editMode = true;
    this.userId = $event;
  }

  handleSaveClick() {
    if(this.username == '' || this.email == '' || this.creationDate == '')
      alert("All the empty spaces must be filled!");
    else if(this.userService.checkOfUsersIsUnique(this.username,this.email,this.userId) === false)
      alert("This email address/username already exist! Please enter another email address/username ");
    else {
      const user: User = {
        userId: this.userId,
        username: this.username ,
        email: this.email ,
        creationDate: this.creationDate ,
        isActive: this.isActive,
      }
      this.userService.editUser(user, this.userId);
      this.users = this.userService.getUsers();
      this.handleCancelClick();
    }
    

  }

  
  handleCancelClick(): void {
    this.editMode= false;
    this.username = "";
    this.email = "";
    this.creationDate = "";
    this.userId= 0;

  }

  handleDeleteClick($event : number) {
    if(this.userService.userCount() === 1)
      alert("You can not delete last users.")
    else if (this.checkPostsAndRemarks($event)=== true)  
      alert ("You cannot delete a user with post or comment")
    else {
      this.userService.deleteUser($event);
      this.users = this.userService.getUsers();
    }
  }
  checkPostsAndRemarks(id : number) : boolean {
    if(this.postService.getPost().filter((post)=> post.userId === id).length !== 0)
    return true;
    else if (this.remarkService.getRemarks().filter((remark) => remark.userId === id).length !==0)
    return true;
    else 
    return false;
  }
  
  

  }
  





