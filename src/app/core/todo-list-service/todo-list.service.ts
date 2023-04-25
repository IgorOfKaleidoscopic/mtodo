import { Injectable } from '@angular/core';

import { ITodo } from 'src/app/shared/interfaces/itodo';
import { TodoItem } from 'src/app/shared/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList:ITodo[] = [];

  constructor() { }

  get():ITodo[] {
    return this.todoList;
  }

  clear():void {
    this.todoList.splice(0);
  }

  appendObject(item:ITodo):void {
    this.todoList.push(item);
  }

  appendByTitle(title:string):void {
    this.todoList.push(new TodoItem (900, this.todoList.length, title, false));
  }

  change(id:number, state:boolean):void {
    this.todoList[id].completed = state;
  }

}
