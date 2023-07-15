import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemarkAddComponent } from './remark-add/remark-add.component';
import { RemarkDetailComponent } from './remark-detail/remark-detail.component';
import { RemarkListComponent } from './remark-list/remark-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    RemarkAddComponent,
    RemarkDetailComponent,
    RemarkListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppModule
  ]
})
export class RemarkModule { }
