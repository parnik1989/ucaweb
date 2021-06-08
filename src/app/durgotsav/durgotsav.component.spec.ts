import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DurgotsavComponent } from './durgotsav.component';

describe('DurgotsavComponent', () => {
  let component: DurgotsavComponent;
  let fixture: ComponentFixture<DurgotsavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DurgotsavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgotsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
