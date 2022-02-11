import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudoperationService {

  base = 'http://13.58.221.117:3000';

  constructor(public http: HttpClient) { }

  save(methodName: any, pl: any): Observable<any> {
    return this.http.post(this.base + methodName, pl).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: object) => {}
      )
    );
  }

  update(methodName: any, pl: any): Observable<any> {
    return this.http.put(this.base + methodName, pl).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: object) => {}
      )
    );
  }

  findOne(methodName: any, id: any): Observable<any> {
    return this.http.get(this.base + methodName, id).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: object) => {}
      )
    );
  }

  findAll(methodName: any): Observable<any> {
    return this.http.get(this.base + methodName).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: object) => {}
      )
    );
  }

  findAllWithParam(methodName: any, t: any): Observable<any> {
    return this.http.post(this.base + methodName, t).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: object) => {}
      )
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.base + '/' + id).pipe(
      map(
        (response) => {
          return response;
        },
        (error: object) => {}
      )
    );

  }

}
