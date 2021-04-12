import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoApprovalComponent } from './photo-approval.component';

describe('PhotoApprovalComponent', () => {
  let component: PhotoApprovalComponent;
  let fixture: ComponentFixture<PhotoApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
