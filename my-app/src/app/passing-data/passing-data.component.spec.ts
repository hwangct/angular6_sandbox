import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingDataComponent } from './passing-data.component';

describe('PassingDataComponent', () => {
  let component: PassingDataComponent;
  let fixture: ComponentFixture<PassingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
