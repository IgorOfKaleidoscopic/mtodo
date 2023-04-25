import { Todo } from './Todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1,1,'Title',false)).toBeTruthy();
  });
});
