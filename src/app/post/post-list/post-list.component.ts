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
  pagedData : Post[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private postService : PostService, private router : Router) {
    if(this.postService.getPost().length === 0)
    this.postService.setPost();
    this.posts = this.postService.getPost();
  }

  handleDeleteClick($event : number) : void {
    this.postService.deletePost($event);
    this.posts = this.postService.getPost();
    this.pageChanged(this.currentPage);
  }
  
  handleDetailClick($event : number) : void {
    this.router.navigate(["/postlist/", $event]);
  }


  pageChanged(page : number) : void {
    const startIndex = (page -1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.posts.slice(startIndex);
    this.currentPage =  page;
    if(this.pagedData.length === 0 && this.currentPage > 1)
    this.previousPage();
  }
  previousPage() : void {
    if (this.currentPage > 1)
    {
      this.currentPage--;
      this.pageChanged(this.currentPage);
    }
  }

  get totalPage() : number {
    return Math.ceil(this.posts.length / this.itemsPerPage);
  }

  nextPage() : void {
    if(this.currentPage < this.totalPage)
    {
      this.currentPage++;
      this.pageChanged(this.currentPage)
    }
  }

  ngOnInit() {
    this.pageChanged(this.currentPage);
  }

  




  



  

}
