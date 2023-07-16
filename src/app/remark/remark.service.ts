import { Injectable } from '@angular/core';
import { Remark } from './remark';
import { defaultremark } from 'src/assets/defaultremark';

@Injectable({
  providedIn: 'root'
})
export class RemarkService {
  private remarks: Remark[] = [];
  
  constructor() { }

  getRemarks(): Remark[] {
    return this.remarks;
  }

  setRemarks() : void {
    this.remarks = defaultremark;
  }

  deleteRemark ($event : number) {
    console.log(typeof $event)
    this.remarks = this.remarks.filter((remark) => remark.commentId !== $event);
  }

  addRemark (remark : Remark) {
    this.remarks.push(remark);
  }
}
