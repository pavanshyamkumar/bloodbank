import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbloodcategoriesComponent } from './userbloodcategories.component';

describe('UserbloodcategoriesComponent', () => {
  let component: UserbloodcategoriesComponent;
  let fixture: ComponentFixture<UserbloodcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbloodcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbloodcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
