import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Configuration3Page } from './configuration3.page';

describe('Configuration3Page', () => {
  let component: Configuration3Page;
  let fixture: ComponentFixture<Configuration3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Configuration3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
