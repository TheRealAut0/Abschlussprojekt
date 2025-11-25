import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareCreateComponent } from './hardware-create.component';

describe('HardwareCreateComponent', () => {
  let component: HardwareCreateComponent;
  let fixture: ComponentFixture<HardwareCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareCreateComponent]
    });
    fixture = TestBed.createComponent(HardwareCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
