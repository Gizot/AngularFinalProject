import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [
    PostAddComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
