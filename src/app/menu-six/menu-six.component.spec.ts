import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSixComponent } from './menu-six.component';

describe('MenuSixComponent', () => {
  let component: MenuSixComponent;
  let fixture: ComponentFixture<MenuSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSixComponent]
    });
    fixture = TestBed.createComponent(MenuSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
