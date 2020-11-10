import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListNotaPage } from './list-nota.page';

describe('ListNotaPage', () => {
  let component: ListNotaPage;
  let fixture: ComponentFixture<ListNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
