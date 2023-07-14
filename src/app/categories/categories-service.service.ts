import { Injectable } from '@angular/core';
import { PostService } from '../post/post.service';
import { Category } from './category';
import { defaultcategory } from 'src/assets/categoriesdefault';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {
  private category : Category[] = [];

  constructor(private postService : PostService) { }

  getCategories(): Category[] {
    return this.category;
  }

  setCategory() : void {
    this.category = defaultcategory;
  }
  deleteCategory($event: number) {
    if (this.postService.getPost().length === 0)
      this.postService.setPost();
    if (this.postService.getPost().filter(post => Number(post.categoryId) === Number($event)).length > 0)
      alert("You cannot delete a category with posts");
    else
      this.category = this.category.filter(category => category.categoryId !== $event);
  }
  getById(id: number): Category | undefined {
    return this.category.find((category) => category.categoryId === id);
  }
  editCategory(updateCategory: Category) {
    this.category = this.category.map(category => {
      if (category.categoryId === updateCategory.categoryId)
        category = updateCategory;
      return category;
    });
  }
  checkUniqueCategory(name: string, id: number): boolean {
    if(this.category.find((category)=> category.name === name.toLowerCase()) !== undefined
    && this.findByName(name.toLowerCase())!.categoryId !== id)
      return false ;
    else
      return true ;
  }
  addCategory(newName: string, newDate: string)
  {
    const newCategory: Category = {
      categoryId: this.getCategories()[this.getCategories().length - 1].categoryId + 1,
      name: newName,
      creationDate: newDate,
    }
    if (this.checkUniqueCategory(newCategory.name, newCategory.categoryId) === true)
      this.category.push(newCategory);
    else
      alert("This category already exist");
  }

  findByName(name: string) {
    return this.category.find((category)=> category.name === name )
  }
}
