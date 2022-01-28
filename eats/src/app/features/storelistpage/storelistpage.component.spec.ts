import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelistpageComponent } from './storelistpage.component';

describe('StorelistpageComponent', () => {
  let component: StorelistpageComponent;
  let fixture: ComponentFixture<StorelistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorelistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorelistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
