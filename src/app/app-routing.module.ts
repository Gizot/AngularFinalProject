import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';


const routes: Routes = [
  {path: "usercreate", component: UserCreateComponent},
  {path : "userlist", component : UserListComponent},
  {path : "postlist", component : PostListComponent},
  {path : "postadd", component : PostAddComponent},
  {path : "postdetail", component : PostDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
