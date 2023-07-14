import { Injectable } from '@angular/core';
import { Post } from './post';
import { defaultpost } from 'src/assets/defaultpost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() { }

  getPost() : Post[] {
    return this.posts;
  }
  setPost() : void {
    this.posts = defaultpost;
  }
  deletePost(id : number) : void {
    this.posts = this.posts.filter((post)=> post.postId !==id);
  }
  addPost(post : Post) {
    this.posts.push(post);
  }
  editPost(editedPost : Post) {
    this.posts = this.posts.map(post => {
      if (post.postId === editedPost.postId)
      post = editedPost;
      return post;
    });
  }
  findPostById(id : number) : Post | undefined {
    return this.posts.find((post)=> Number(post.postId) === Number(id))
  }

}
