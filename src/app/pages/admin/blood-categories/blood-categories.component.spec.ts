import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCategoriesComponent } from './blood-categories.component';

describe('BloodCategoriesComponent', () => {
  let component: BloodCategoriesComponent;
  let fixture: ComponentFixture<BloodCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
