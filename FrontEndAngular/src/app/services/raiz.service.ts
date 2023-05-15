import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class RaizService <T> {

  protected raizUrl = 'loquevengaderender';
  constructor(protected http: HttpClient, protected url: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.raizUrl + this.url + '/watch');
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.raizUrl + this.url + '/id/' + id);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.raizUrl + this.url + '/add', item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(this.raizUrl + this.url + '/edit/' + id, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.raizUrl + this.url + '/delete/' + id);
  }
}
