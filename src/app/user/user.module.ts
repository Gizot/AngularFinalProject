import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppModule,
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
