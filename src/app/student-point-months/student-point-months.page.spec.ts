import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentPointMonthsPage } from './student-point-months.page';

describe('StudentPointMonthsPage', () => {
  let component: StudentPointMonthsPage;
  let fixture: ComponentFixture<StudentPointMonthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPointMonthsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentPointMonthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
