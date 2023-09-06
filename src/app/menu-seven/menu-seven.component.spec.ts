import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSevenComponent } from './menu-seven.component';

describe('MenuSevenComponent', () => {
  let component: MenuSevenComponent;
  let fixture: ComponentFixture<MenuSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSevenComponent]
    });
    fixture = TestBed.createComponent(MenuSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
