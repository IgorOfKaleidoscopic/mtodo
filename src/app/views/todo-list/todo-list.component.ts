import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { ITodo } from 'src/app/shared/interfaces/ITodo';
import { TodoListService } from 'src/app/core/todo-list-service/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodoTitle:string = '';
  todoList:ITodo[] = [];

  constructor(private tlservice:TodoListService, private snackBar: MatSnackBar, private router:Router) {
    this.todoList = this.tlservice.get();
  }

  ngOnInit():void {

  }

 onKeyUp(e:any){
    if (e.keyCode === 13) {
      if (this.newTodoTitle.trim().length > 0) {
        this.tlservice.append(this.newTodoTitle);
        this.tlservice.rewriteLocalStorage();

        this.router.navigate([this.router.url]);
      }
      else{
        this.snackBar.open("Todo title can't be an empty string", 'OK', {horizontalPosition: 'start', verticalPosition: 'bottom'});
      }
    }
  }

  onModelChanged(e:any) {
    this.tlservice.rewriteLocalStorage();

    this.router.navigate([this.router.url]);
  }
}
