import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, map, filter, throwError, catchError } from 'rxjs';

import { ITodo } from 'src/app/shared/interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  urlRestApi: string;

  constructor(private httpc: HttpClient) {
    this.urlRestApi = 'https://jsonplaceholder.typicode.com/todos';
  }

  readTodoList():Observable<ITodo[]> {
    return this.httpc.get<ITodo[]>(
      `${this.urlRestApi}`,
      {
        headers: {
        },
        params: {
        }
      }
      ).pipe();
  }
}
