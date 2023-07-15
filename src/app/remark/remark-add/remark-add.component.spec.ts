import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkAddComponent } from './remark-add.component';

describe('RemarkAddComponent', () => {
  let component: RemarkAddComponent;
  let fixture: ComponentFixture<RemarkAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemarkAddComponent]
    });
    fixture = TestBed.createComponent(RemarkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
