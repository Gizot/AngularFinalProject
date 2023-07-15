import { Component } from '@angular/core';
import { Remark } from '../remark';
import { RemarkService } from '../remark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remark-list',
  templateUrl: './remark-list.component.html',
  styleUrls: ['./remark-list.component.css']
})
export class RemarkListComponent {
  remarks : Remark [] = [];
  pagedData: Comment[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private remarkService : RemarkService, private router : Router) {
    if (this.remarkService.getRemarks().length === 0)
    this.remarkService.setRemarks();
    this.remarks = this.remarkService.getRemarks();
  };

  handleDetailClick($event: number) {
    this.router.navigateByUrl('/remarklist/${$event}');
  }

  handleDeleteClick($event : number) {
    this.remarkService.deleteRemark($event);
    this.remarks = this.remarkService.getRemarks();
  }

}
