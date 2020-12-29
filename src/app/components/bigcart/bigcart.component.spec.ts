import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigcartComponent } from './bigcart.component';

describe('BigcartComponent', () => {
  let component: BigcartComponent;
  let fixture: ComponentFixture<BigcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
