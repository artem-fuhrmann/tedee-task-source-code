import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinManagerHeaderComponent } from './pin-manager-header.component';

describe('PinManagerHeaderComponent', () => {
  let component: PinManagerHeaderComponent;
  let fixture: ComponentFixture<PinManagerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinManagerHeaderComponent]
    });
    fixture = TestBed.createComponent(PinManagerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
