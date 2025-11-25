import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingScreenSpinnerComponent } from './loading-screen-spinner.component';

describe('LoadingScreenSpinnerComponent', () => {
  let component: LoadingScreenSpinnerComponent;
  let fixture: ComponentFixture<LoadingScreenSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenSpinnerComponent]
    });
    fixture = TestBed.createComponent(LoadingScreenSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
