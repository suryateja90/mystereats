import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMystereatBoxComponent } from './add-mystereat-box.component';

describe('AddMystereatBoxComponent', () => {
  let component: AddMystereatBoxComponent;
  let fixture: ComponentFixture<AddMystereatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMystereatBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMystereatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
