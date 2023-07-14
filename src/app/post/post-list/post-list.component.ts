import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post [] = [];

  constructor(private postService : PostService, private router : Router) {
    if(this.postService.getPost().length === 0)
    this.postService.setPost();
    this.posts = this.postService.getPost();
  }

  handleDeleteClick($event : number) : void {
    this.postService.deletePost($event);
    this.posts = this.postService.getPost();
  }
  
  handleDetailClick($event : number) : void {
    this.router.navigate(["/postlist/" , $event]);
  }




  



  

}
