import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatboxheaderComponent } from './eatboxheader.component';

describe('EatboxheaderComponent', () => {
  let component: EatboxheaderComponent;
  let fixture: ComponentFixture<EatboxheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatboxheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatboxheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
