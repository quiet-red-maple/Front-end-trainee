namespace Omitmodule {
  type MyOmit<T, U extends keyof T> = {
    [P in keyof T as P extends U ? never : P]: T[P];
  };

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type DefaultTodoPreview = Omit<Todo, "description" | "title">;
  type TodoPreview = MyOmit<Todo, "description" | "title">;

  const todo: TodoPreview = {
    completed: false,
  };
}
