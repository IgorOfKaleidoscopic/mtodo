import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { TodoListService } from './core/todo-list-service/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO App';
  subscr$: Subscription = Subscription.EMPTY;
  loading: boolean = true;
  error: string = '';

  constructor(private tlservice:TodoListService, private router:Router) {
  }

  ngAfterViewInit():void {
    this.subscr$ = this.tlservice.readWebService().subscribe({
      next: (data) => {
        console.info("Stream chunk");
        console.log(data);

        this.tlservice.todoList = this.tlservice.todoList.concat(data);
      },
      error: (err) => {
        console.error(err);

        this.error = err;
        this.loading = false;
      },
      complete: () => {
        console.info('Stream complete');

        this.loading = false;

        this.router.navigateByUrl('/tl');
      }
    });
  }

  ngOnDestroy() {
    this.subscr$.unsubscribe();
 }
}
