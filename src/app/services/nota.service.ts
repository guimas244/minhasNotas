import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private PATH = 'notas/';

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

  save(nota: any) {
    console.log('salvando este dado ', nota);
    return new Promise((resolve, reject) => {
      if (nota.key) {
        this.db.list(this.PATH)
          .update(nota.key, { nome: nota.nome, ano: nota.ano, observacao: nota.observacao })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ nome: nota.nome, ano: nota.ano, observacao: nota.observacao })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
