// 我们想通过在联合类型Cat | Dog中搜索公共type字段来获取相应的类型。换句话说，在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。
namespace LookUpModule {
  type LookUp<T, U> = T extends { type: U } ? T : never;

  interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
  }

  interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
  }

  type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
}
