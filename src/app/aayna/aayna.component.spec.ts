import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AaynaComponent } from './aayna.component';

describe('AaynaComponent', () => {
  let component: AaynaComponent;
  let fixture: ComponentFixture<AaynaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AaynaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaynaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
