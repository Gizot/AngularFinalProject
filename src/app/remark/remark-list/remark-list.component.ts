import { Component } from '@angular/core';
import { Remark } from '../remark';
import { RemarkService } from '../remark.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-remark-list',
  templateUrl: './remark-list.component.html',
  styleUrls: ['./remark-list.component.css']
})
export class RemarkListComponent {
  remarks : Remark [] = [];
  pagedData: Remark[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private postService : PostService ,private remarkService : RemarkService, private router : Router) {
    if (this.remarkService.getRemarks().length === 0)
     this.remarkService.setRemarks();
    this.remarks = this.remarkService.getRemarks();

    if (this.postService.getPost().length === 0)
     this.postService.setPost();
  };

  handleDetailClick($event: number) {
    this.router.navigateByUrl(`/remarklist/${$event}`);
  }

  handleDeleteClick($event : number) {
    console.log(typeof $event)
    this.remarkService.deleteRemark($event);
    this.remarks = this.remarkService.getRemarks();
    this.pageChanged(this.currentPage);
  }

  get totalPage(): number {
    return Math.ceil(this.remarks.length / this.itemsPerPage);
  }

  ngOnInit(){
    this.pageChanged(this.currentPage);
  }

  pageChanged(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.remarks.slice(startIndex, endIndex);
    this.currentPage = page;
    if (this.pagedData.length === 0 && this.currentPage > 1)
      this.previousPage();
  }

  previousPage(): void {
    if (this.currentPage > 1)
    {
      this.currentPage--;
      this.pageChanged(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages)
    {
      this.currentPage++;
      this.pageChanged(this.currentPage);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.remarks.length / this.itemsPerPage);
  }


}
