import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VerdetalleVino } from "./verdetalle-vino";

describe("VerdetalleVino", () => {
  let component: VerdetalleVino;
  let fixture: ComponentFixture<VerdetalleVino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdetalleVino],
    }).compileComponents();

    fixture = TestBed.createComponent(VerdetalleVino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
