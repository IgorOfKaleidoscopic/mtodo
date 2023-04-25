import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, map, filter, throwError, catchError } from 'rxjs';

import { ITodo } from 'src/app/shared/interfaces/ITodo';
import { Todo } from 'src/app/shared/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  urlRestApi: string;
  todoList:ITodo[] = [];

  constructor(private httpc: HttpClient) {
    this.urlRestApi = 'https://jsonplaceholder.typicode.com/todos';
  }

  readWebService():Observable<ITodo[]> {
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

  get():ITodo[] {
    return this.todoList;
  }

  append(title:string):void {
    this.todoList.push(new Todo (900, this.todoList.length, title, false));
  }

  readLocalStorage():void {
    this.todoList.forEach( (todo:ITodo) => {
      if (localStorage.getItem('mto#' + todo.id.toString()) == 'c') {
        todo.completed = true;
      }
      else {
        todo.completed = false;
      }
    });
  }

  rewriteLocalStorage():void {
    localStorage.clear();

    this.todoList.forEach( (todo:ITodo) => {
      localStorage.setItem('mto#'+todo.id.toString(), todo.completed?'c':'a');
    });
  }
}
