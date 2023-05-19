// 从类型 T 中选择出属性 K，构造成一个新的类型。
namespace PickModule {
  // 防止ts默认 类型定义共享
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type DefaultTodoPreview = Pick<Todo, "title" | "completed">;
  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
}
