namespace ReturnTypeModule {
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type defaultA = ReturnType<typeof fn>;
  type a = MyReturnType<typeof fn>;
}
