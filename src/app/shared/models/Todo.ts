import { ITodo } from 'src/app/shared/interfaces/itodo';

export class Todo implements ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  public constructor(userId:number, id:number, title:string, completed:boolean) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
