import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto2Card } from './producto2-card';

describe('Producto2Card', () => {
  let component: Producto2Card;
  let fixture: ComponentFixture<Producto2Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Producto2Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Producto2Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
