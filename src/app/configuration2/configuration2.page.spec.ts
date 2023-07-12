import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Configuration2Page } from './configuration2.page';

describe('Configuration2Page', () => {
  let component: Configuration2Page;
  let fixture: ComponentFixture<Configuration2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Configuration2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
