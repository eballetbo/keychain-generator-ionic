import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Configuration1Page } from './configuration1.page';

describe('Configuration1Page', () => {
  let component: Configuration1Page;
  let fixture: ComponentFixture<Configuration1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Configuration1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
