import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ITodo } from 'src/app/shared/interfaces/itodo';
import { TodoListService } from 'src/app/core/data/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodoTitle:string = '';
  todoList:ITodo[] = [];

  constructor(private tdl:TodoListService, private snackBar: MatSnackBar) { }

  ngOnInit():void {
    this.todoList = this.tdl.get();
  }

  handleKeyUp(e:any){
    if (e.keyCode === 13) {
      if (this.newTodoTitle.trim().length > 0) {
        this.tdl.appendByTitle(this.newTodoTitle);
      }
      else{
        this.snackBar.open("Todo title can't be an empty string", 'OK', {horizontalPosition: 'start', verticalPosition: 'bottom'});
      }
    }
  }
}
