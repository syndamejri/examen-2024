import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonationComponentComponent } from './add-donation-component.component';

describe('AddDonationComponentComponent', () => {
  let component: AddDonationComponentComponent;
  let fixture: ComponentFixture<AddDonationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDonationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
