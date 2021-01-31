import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentPointPage } from './student-point.page';

describe('StudentPointPage', () => {
  let component: StudentPointPage;
  let fixture: ComponentFixture<StudentPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
