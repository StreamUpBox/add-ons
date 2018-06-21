import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGithubComponent } from './ngithub.component';

describe('NGithubComponent', () => {
  let component: NGithubComponent;
  let fixture: ComponentFixture<NGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
