import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDonorsComponent } from './user-view-donors.component';

describe('UserViewDonorsComponent', () => {
  let component: UserViewDonorsComponent;
  let fixture: ComponentFixture<UserViewDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewDonorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
