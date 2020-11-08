import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class DisciplinaService {
  private PATH = 'disciplinas/';

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
      }));
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .pipe(map(c => {
        return { key: c.key, ...c.payload.val() as {} };
      }));
  }

  save(disciplina: any) {
    return new Promise((resolve, reject) => {
      if (disciplina.key) {
        this.db.list(this.PATH)
          .update(disciplina.key, { nome: disciplina.nome, ano: disciplina.ano, observacao: disciplina.observacao })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ nome: disciplina.nome, ano: disciplina.ano, observacao: disciplina.observacao })
          .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }
}