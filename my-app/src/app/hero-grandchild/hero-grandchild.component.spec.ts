import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGrandchildComponent } from './hero-grandchild.component';

describe('HeroGrandchildComponent', () => {
  let component: HeroGrandchildComponent;
  let fixture: ComponentFixture<HeroGrandchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGrandchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
