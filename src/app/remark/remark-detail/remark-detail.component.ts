import { Component } from '@angular/core';
import { Remark } from '../remark';
import { ActivatedRoute } from '@angular/router';
import { RemarkService } from '../remark.service';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-remark-detail',
  templateUrl: './remark-detail.component.html',
  styleUrls: ['./remark-detail.component.css']
})
export class RemarkDetailComponent {

  remarks: Remark[] = [];
  remark: Remark = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    creationDate: "",
    isConfirmed: false
  };

  constructor(private activatedRoute : ActivatedRoute, private remarkService : RemarkService,
    private postService : PostService , ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.remarks = this.remarkService.getRemarks();
      const id = params['id'];
      this.remark = this.remarks.find(remark => remark.commentId ===Number(id))!;

    })
  }

}
