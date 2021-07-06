import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerActiveComponent } from './banner-active.component';

describe('BannerActiveComponent', () => {
  let component: BannerActiveComponent;
  let fixture: ComponentFixture<BannerActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
