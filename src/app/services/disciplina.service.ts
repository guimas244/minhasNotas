import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private PATH = 'disciplinas/';

  constructor(private db: AngularFireDatabase) { }
  
}
