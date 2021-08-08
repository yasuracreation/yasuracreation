import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLibComponent } from './header-lib.component';

describe('HeaderLibComponent', () => {
  let component: HeaderLibComponent;
  let fixture: ComponentFixture<HeaderLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLibComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
