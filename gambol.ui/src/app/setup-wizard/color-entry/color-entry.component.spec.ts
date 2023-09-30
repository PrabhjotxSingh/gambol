import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorEntryComponent } from './color-entry.component';

describe('ColorEntryComponent', () => {
  let component: ColorEntryComponent;
  let fixture: ComponentFixture<ColorEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorEntryComponent]
    });
    fixture = TestBed.createComponent(ColorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
