import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ITodo } from 'src/app/shared/interfaces/itodo';
import { JsonplaceholderService } from 'src/app/core/json-placeholder-service/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO App';
  subscr$: Subscription = Subscription.EMPTY;
  loading: boolean = false;
  errorMsg: string = '';
  todoList: ITodo[] = [];

  constructor(private jph:JsonplaceholderService) {
  }

  ngOnInit():void {
    this.loading = true;

    this.subscr$ = this.jph.readTodoList().subscribe({
      next: (data) => {
        console.info("Stream chunk");
        console.log(data);

        this.todoList = data;
      },
      error: (err) => {
        console.error(err);

        this.errorMsg = err;
        this.loading = false;
      },
      complete: () => {
        console.info('Stream complete');

        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscr$.unsubscribe();
 }
}
