import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepinessModalPage } from './sleepiness-modal.page';

describe('SleepinessModalPage', () => {
  let component: SleepinessModalPage;
  let fixture: ComponentFixture<SleepinessModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepinessModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepinessModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
