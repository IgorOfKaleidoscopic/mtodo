import { Component, OnInit } from '@angular/core';

import { ITodo } from 'src/app/shared/interfaces/itodo';
import { TodoListService } from 'src/app/core/data/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList:ITodo[] = [];

  constructor(private tdl:TodoListService) { }

  ngOnInit():void {
    this.todoList = this.tdl.get();
  }
}
