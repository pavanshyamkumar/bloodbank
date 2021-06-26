import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDonordetailsComponent } from './user-view-donordetails.component';

describe('UserViewDonordetailsComponent', () => {
  let component: UserViewDonordetailsComponent;
  let fixture: ComponentFixture<UserViewDonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewDonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewDonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
