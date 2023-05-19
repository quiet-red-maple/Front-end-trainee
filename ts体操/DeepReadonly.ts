// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
namespace DeepReadonlyModule {
  type DeepReadonly<T> = {
    // readonly [P in keyof T]: T[P] extends {} ? DeepReadonly<T[P]> : T[P];
    readonly [P in keyof T]: T[P] extends Function
      ? T[P]
      : T[P] extends {}
      ? DeepReadonly<T[P]>
      : T[P];
  };

  type X = {
    x: {
      a: 1;
      b: "hi";
    };
    y: "hey";
  };

  type Expected = {
    readonly x: {
      readonly a: 1;
      readonly b: "hi";
    };
    readonly y: "hey";
  };

  type Todo = DeepReadonly<X>; // should be same as `Expected`

  const b: Todo = {
    x: {
      a: 1,
      b: "hi",
    },
    y: "hey",
  };
  b.x.a = 3;
  b.x.b = 3;
}
