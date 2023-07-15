import { Component } from '@angular/core';
import { CategoriesServiceService } from '../categories-service.service';
import { PostService } from 'src/app/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {

  existCategory: Category = {
    categoryId: 0,
    name: "",
    creationDate: "",
  }
  editedCategory: Category = {
    categoryId: this.existCategory.categoryId,
    name: "",
    creationDate: "",
  }
  postCount: number = 0;
  editMode: boolean = false;
 
  
  constructor(
    private categoryService: CategoriesServiceService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.existCategory = this.categoryService.getById(Number(id))!;
      this.editedCategory.categoryId = Number(id);
      if (this.postService.getPost().length === 0)
        this.postService.setPost();
      this.postCount = this.postService.getPost().filter(post => post.categoryId === Number(id)).length;
    })
  }

  handleEditClick() {
    this.editMode = !this.editMode;
  }

  handleSaveClick() {
    this.categoryService.editCategory(this.editedCategory);
    this.router.navigateByUrl("/categorylist");
  }

  handleCancelClick() {
    this.editMode = false;
    this.editedCategory.creationDate = "";
    this.editedCategory.name = "";
  }


}
