import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDisciplinaPage } from './list-disciplina.page';

describe('ListDisciplinaPage', () => {
  let component: ListDisciplinaPage;
  let fixture: ComponentFixture<ListDisciplinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisciplinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
