import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogAlertPage } from './log-alert.page';

describe('LogAlertPage', () => {
  let component: LogAlertPage;
  let fixture: ComponentFixture<LogAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAlertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
