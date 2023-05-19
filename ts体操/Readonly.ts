// 不可再对新对象的属性进行赋值
namespace MyReadonlyModule {
 type MyReadonly<T> = {
   readonly [P in keyof T]: T[P];
 };
  interface Todo {
    title: string;
    description: string;
  }

  const defaultTodo: Readonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  todo.title = "Hello"; // Error: cannot reassign a readonly property
  todo.description = "barFoo"; // Error: cannot reassign a readonly property
}
