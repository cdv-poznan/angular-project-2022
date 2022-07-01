import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersfileComponent } from './usersfile.component';

describe('UsersfileComponent', () => {
  let component: UsersfileComponent;
  let fixture: ComponentFixture<UsersfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
