import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgotsav2020Component } from './durgotsav2020.component';

describe('Durgotsav2020Component', () => {
  let component: Durgotsav2020Component;
  let fixture: ComponentFixture<Durgotsav2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Durgotsav2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Durgotsav2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
