import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAgapeComponent } from './logo-agape.component';

describe('LogoAgapeComponent', () => {
  let component: LogoAgapeComponent;
  let fixture: ComponentFixture<LogoAgapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAgapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAgapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
