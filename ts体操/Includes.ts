namespace IncludesModule {
  //  注意该定义只是简单解法

  type Includes<T extends any[], U> = U extends T[number] ? true : false;
  type Case1 = Includes<[{}], { a: 1 }>; // 这种例子无法通过 由于 { a: 1 } extends {} 为 true;
  type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
}
