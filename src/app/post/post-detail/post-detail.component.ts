import { Component } from '@angular/core';
import { Post } from '../post';
import { User } from 'src/app/user/user';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  users : User[] = [];
  posts : Post[] = [];
  editMode : Boolean = false;
  post : Post = {
  postId: 0,
  userId: 0,
  categoryId: 0,
  title: "",
  content: "",
  viewCount: 0,
  creationDate: "",
  isPublished: false
  };
  

  constructor(private postSercice : PostService, private router : Router, private userService : UserService,
    private activatedRoute : ActivatedRoute)
   {

  }
  
  handleEditClick(){
    this.editMode = !this.editMode;
  }

  handleSaveClick() {
    this.postSercice.editPost(this.post);
    this.router.navigateByUrl('/postlist')
  }

  handleDeleteClick() {
    this.postSercice.deletePost(this.post.postId);
    this.router.navigateByUrl('/postlist');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.posts = this.postSercice.getPost();
      const id = params['id'];
      this.post = this.posts.find(post => post.postId === Number(id))!;
      })
    }







}
