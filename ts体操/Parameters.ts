namespace ParametersModule {
  type MyParameters<T extends (...arg: any) => any> = T extends (
    ...args: infer P
  ) => any
    ? P
    : never;
  const foo = (arg1: string, arg2: number): void => {};
  // [arg1: string, arg2: number]
  type FunctionParamsType = MyParameters<typeof foo>;
}
