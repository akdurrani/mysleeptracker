import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvernightModalPage } from './overnight-modal.page';

describe('OvernightModalPage', () => {
  let component: OvernightModalPage;
  let fixture: ComponentFixture<OvernightModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvernightModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvernightModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
