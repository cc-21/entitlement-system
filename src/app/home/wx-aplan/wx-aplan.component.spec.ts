import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxAplanComponent } from './wx-aplan.component';

describe('WxAplanComponent', () => {
  let component: WxAplanComponent;
  let fixture: ComponentFixture<WxAplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WxAplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WxAplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
