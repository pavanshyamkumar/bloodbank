import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonortwoComponent } from './add-donortwo.component';

describe('AddDonortwoComponent', () => {
  let component: AddDonortwoComponent;
  let fixture: ComponentFixture<AddDonortwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonortwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonortwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
