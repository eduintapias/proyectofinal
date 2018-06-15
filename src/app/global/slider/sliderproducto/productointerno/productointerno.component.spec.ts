import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductointernoComponent } from './productointerno.component';

describe('ProductointernoComponent', () => {
  let component: ProductointernoComponent;
  let fixture: ComponentFixture<ProductointernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductointernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductointernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
