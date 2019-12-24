import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutScreenComponent } from "./checkout-screen.component";

describe("CheckoutScreenComponent", () => {
  let component: CheckoutScreenComponent;
  let fixture: ComponentFixture<CheckoutScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutScreenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
