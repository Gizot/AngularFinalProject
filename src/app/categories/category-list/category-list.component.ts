import { Component } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoriesServiceService } from '../categories-service.service';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
categories : Category [] = [];
pagedData: Category[] = [];
addCategoryForm: boolean = false;
nameOfNewCategory : string = "";
dateOfnewCategory : string = "";
currentPage = 1;
itemsPerPage = 5;

addtoCategoryForm : boolean = false;

constructor(private categoryService: CategoriesServiceService, private router: Router, private postService: PostService){
  if (this.categoryService.getCategories.length === 0)
    this.categoryService.setCategory();
  this.categories = this.categoryService.getCategories();
}

ngOnInit(){
  this.pageChanged(this.currentPage);
}

pageChanged(page: number): void {
  const startIndex = (page - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.pagedData = this.categories.slice(startIndex, endIndex);
  this.currentPage = page;
  if (this.pagedData.length === 0 && this.currentPage > 1)
    this.previousPage();
}

nextPage(): void {
  if (this.currentPage < this.totalPages)
  {
    this.currentPage++;
    this.pageChanged(this.currentPage);
  }
}

previousPage(): void {
  if (this.currentPage > 1)
  {
    this.currentPage--;
    this.pageChanged(this.currentPage);
  }
}
get totalPages(): number {
  return Math.ceil(this.categories.length / this.itemsPerPage);
}

handleDeleteClick($event: number){
  this.categoryService.deleteCategory($event);
  this.categories = this.categoryService.getCategories();
  this.pageChanged(this.currentPage);
}

handleDetailClick($event: number){
  this.router.navigateByUrl(`categorylist/${$event}`);
}




handleAddCategory() {
  this.addCategoryForm = !this.addCategoryForm;
}

handleSaveClick() {
  if (this.nameOfNewCategory === "" || this.dateOfnewCategory === "")
    alert("Name or creation date cannot be empty.")
  else
  {
    this.categoryService.addCategory(this.nameOfNewCategory, this.dateOfnewCategory);
    this.pageChanged(this.currentPage);
    this.addCategoryForm = false;
    this.nameOfNewCategory = "";
    this.dateOfnewCategory = "";
  }
}

handleCancelClick(){
  this.addCategoryForm = false;
  this.nameOfNewCategory = "";
  this.dateOfnewCategory = "";
}


}
