import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpoloyComponent } from './add-empoloy.component';

describe('AddEmpoloyComponent', () => {
  let component: AddEmpoloyComponent;
  let fixture: ComponentFixture<AddEmpoloyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpoloyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpoloyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
