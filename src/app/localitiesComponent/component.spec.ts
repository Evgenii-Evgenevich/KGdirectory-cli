import { TestBed, async } from '@angular/core/testing';
import { Component } from './component';
describe('Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Component
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ang-cli'`, async(() => {
    const fixture = TestBed.createComponent(Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ang-cli');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ang-cli!');
  }));
});
