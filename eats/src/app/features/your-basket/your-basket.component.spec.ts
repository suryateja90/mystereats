import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBasketComponent } from './your-basket.component';

describe('YourBasketComponent', () => {
  let component: YourBasketComponent;
  let fixture: ComponentFixture<YourBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
