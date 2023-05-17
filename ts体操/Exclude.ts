// 从联合类型 T 中排除 U 的类型成员，来构造一个新的类型。
namespace ExcludeModule {
  type MyExclude<T, U> = T extends U ? never : T;
  type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
}
