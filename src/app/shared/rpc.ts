import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Rpc {
  constructor(private http: Http) {}

  invoke(serviceName: string, methodName: string, ...args: any[]): Observable<any> {
    return this.http
      .post('/api/rpc', {
        serviceName: serviceName,
        methodName: methodName,
        arguments: args
      })
      .map(response => response.json())
      .map(response => {
        return response.hasOwnProperty('result') ? response.result : Observable.throw(response.error);
      });
  }
}
