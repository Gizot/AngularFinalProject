import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { RemarkListComponent } from './remark/remark-list/remark-list.component';
import { RemarkAddComponent } from './remark/remark-add/remark-add.component';


const routes: Routes = [
  {path: "usercreate", component: UserCreateComponent},
  {path : "userlist", component : UserListComponent},
  {path : "postlist", component : PostListComponent},
  {path : "postadd", component : PostAddComponent},
  {path : "postlist/:id", component : PostListComponent},
  {path : "categorylist", component : CategoryListComponent},
  {path : "categorydetails/:id", component : CategoryDetailComponent},
  {path : "remarklist", component : RemarkListComponent},
  {path : "remarklist/:id", component : RemarkListComponent},
  {path : "remarkadd", component : RemarkAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
