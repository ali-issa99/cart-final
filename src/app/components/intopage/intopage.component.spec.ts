import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntopageComponent } from './intopage.component';

describe('IntopageComponent', () => {
  let component: IntopageComponent;
  let fixture: ComponentFixture<IntopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
