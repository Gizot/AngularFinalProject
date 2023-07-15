import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkDetailComponent } from './remark-detail.component';

describe('RemarkDetailComponent', () => {
  let component: RemarkDetailComponent;
  let fixture: ComponentFixture<RemarkDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemarkDetailComponent]
    });
    fixture = TestBed.createComponent(RemarkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
