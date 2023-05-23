// 可串联构造器
namespace ChainableModule {
  type Chainable<T = {}> = {
    option: <K extends string, S>(
      key: K extends keyof T ? never : K,
      value: S
    ) => Chainable<
      {
        // 核心，从原来的 T 中排除 K 属性，这样交叉后的结果就是传入的 S 属性
        [P in keyof T as P extends K ? never : P]: T[P];
      } & {
        [P in K]: S;
      }
    >;
    get(): T;
  };

  declare const config: Chainable;

  const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

  // 期望 result 的类型是：
  interface Result {
    foo: number;
    name: string;
    bar: {
      value: string;
    };
  }
}
