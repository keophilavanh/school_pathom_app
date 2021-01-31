import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoneypaymentPage } from './moneypayment.page';

describe('MoneypaymentPage', () => {
  let component: MoneypaymentPage;
  let fixture: ComponentFixture<MoneypaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneypaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoneypaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
