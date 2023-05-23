namespace PromiseAllModule {
  type MyAwaited<T> = T extends Promise<infer R> ? R : T;
  declare function PromiseAll<T extends any[]>(
    // 核心：通过 [...T] 来去除 ts 对元组的更通用类型的推断，只尝试将元组内的类型进行类型推断
    // readonly 是因为 [...T] 时丢失了元组中 readonly 的属性，统一加回去，此时入参才可以满足类型要求
    values: readonly [...T]
  ): Promise<{
    [P in keyof T]: MyAwaited<T[P]>;
  }>;
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = Promise.all([promise1, promise2, promise3] as const);
}
