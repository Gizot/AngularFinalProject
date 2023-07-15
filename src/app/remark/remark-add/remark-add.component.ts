import { Component } from '@angular/core';
import { Post } from 'src/app/post/post';
import { User } from 'src/app/user/user';
import { Remark } from '../remark';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post/post.service';
import { UserService } from 'src/app/user/user.service';
import { RemarkService } from '../remark.service';

@Component({
  selector: 'app-remark-add',
  templateUrl: './remark-add.component.html',
  styleUrls: ['./remark-add.component.css']
})
export class RemarkAddComponent {
  users : User [] = [];
  posts: Post[] = [];
  remarks : Remark[] = [];
  remark : Remark = {
    commentId : 0,
    postId : 0,
    userId: 0,
    comment: "",
    creationDate: "",
    isConfirmed: false, 
  }
  constructor(private router : Router, private postService : PostService, private userService : UserService, 
    private remarkService : RemarkService){
      if(this.postService.getPost().length === 0 )
       this.userService.setUsers(); 
      if (this.userService.getUsers().length === 0 )
       this.userService.setUsers();
      if(this.remarkService.getRemarks().length === 0)
       this.remarkService.setRemarks();
       else {
        this.remarks = this.remarkService.getRemarks();
        this.users = this.userService.getUsers();
        this.posts = this.postService.getPost();
       }
  }
  
  handleSaveClick(){
    if(this.remark.postId === 0 || this.remark.userId === 0 || this.remark.creationDate === "" || this.remark.comment === "")
    alert ("You must fill every section");
    else{
      this.remark.commentId = this.remarks[this.remarks.length -1].commentId +1;
      
    }

  }
  handleCancelClick() {
    this.router.navigateByUrl("/remarklist");
  }
  
  



}
