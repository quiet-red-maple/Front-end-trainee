// 实现一个通用Pop<T>，它接受一个数组T，并返回一个由数组T的前 length-1 项以相同的顺序组成的数组。
namespace PopModule {
  type Pop<T> = T extends [...infer R, infer _] ? R : [];
  type Shift<T> = T extends [infer _, ...infer R] ? R : [];
  type arr1 = ["a", "b", "c", "d"];
  type arr2 = [3, 2, 1];

  type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2>; // expected to be [3, 2]

  type re3 = Shift<arr1>; // expected to be ['b', 'c', 'd']
  type re4 = Shift<arr2>; // expected to be [2, 1]
}
