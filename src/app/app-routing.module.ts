import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentAddComponent } from './comments/comment-add/comment-add.component';
import { CommentDetailComponent } from './comments/comment-detail/comment-detail.component';


const routes: Routes = [
  {path: "usercreate", component: UserCreateComponent},
  {path : "userlist", component : UserListComponent},
  {path : "postlist", component : PostListComponent},
  {path : "postadd", component : PostAddComponent},
  {path : "postlist/:id", component : PostListComponent},
  {path : "categorylist", component :   CategoryListComponent},
  {path : "categorydetails/:id", component : CategoryDetailComponent},
  {path : "commentlist", component : CommentListComponent},
  {path : "commentadd", component : CommentAddComponent},
  {path : "commentlist/:id", component : CommentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
