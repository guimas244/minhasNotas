import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisciplinaPage } from './disciplina.page';

describe('DisciplinaPage', () => {
  let component: DisciplinaPage;
  let fixture: ComponentFixture<DisciplinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
