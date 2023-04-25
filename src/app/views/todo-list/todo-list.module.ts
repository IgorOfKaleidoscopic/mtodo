import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class TodoListModule {
}
