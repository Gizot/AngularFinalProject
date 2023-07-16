import { Component } from '@angular/core';
import { Post } from '../post';
import { User } from 'src/app/user/user';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Remark } from 'src/app/remark/remark';
import { Category } from 'src/app/categories/category';
import { CategoriesServiceService } from 'src/app/categories/categories-service.service';
import { RemarkService } from 'src/app/remark/remark.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  users : User[] = [];
  posts : Post[] = [];
  categories : Category[] = [];
  editMode: boolean=false;
  post : Post = {
  postId: 0,
  userId: 0,
  categoryId: 0,
  title: "",
  content: "",
  viewCount: 0,
  creationDate: "",
  isPublished: false,
  };
  
  

  constructor(private postService : PostService, 
    private router : Router, private userService : UserService,
    private activatedRoute : ActivatedRoute, 
    private categoryService : CategoriesServiceService,)
    {
      if (this.userService.getUsers().length === 0)
        this.userService.setUsers();
      else
        this.users = this.userService.getUsers();
      if (this.categoryService.getCategories().length === 0)
        this.categoryService.setCategory();
      else
        this.categories = this.categoryService.getCategories();
   }

   ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.posts = this.postService.getPost();
      const id = params['id'];
      this.post = this.posts.find(post => post.postId === Number(id))!;
      })
    }
  handleEditClick(){
    this.editMode = !this.editMode;
  }

  handleSaveClick() {
    this.postService.editPost(this.post);
    this.router.navigateByUrl('/postlist');
  }

  handleDeleteClick() {
    this.postService.deletePost(this.post.postId);
    this.router.navigateByUrl('/postlist');
  }

 







}
