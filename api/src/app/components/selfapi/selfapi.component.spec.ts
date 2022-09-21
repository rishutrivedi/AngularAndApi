import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfapiComponent } from './selfapi.component';

describe('SelfapiComponent', () => {
  let component: SelfapiComponent;
  let fixture: ComponentFixture<SelfapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
