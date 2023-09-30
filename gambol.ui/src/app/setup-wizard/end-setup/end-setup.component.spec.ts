import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSetupComponent } from './end-setup.component';

describe('EndSetupComponent', () => {
  let component: EndSetupComponent;
  let fixture: ComponentFixture<EndSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndSetupComponent]
    });
    fixture = TestBed.createComponent(EndSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
