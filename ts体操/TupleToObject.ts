// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
namespace TupleToObjectModule {
  // PropertyKey = string | number | symbol  (ts内置类型)
  type TupleToObject<T extends readonly PropertyKey[]> = {
    [P in T[number]]: P; // T[number] 索引签名访问，元组转联合类型
  };

  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

  // expected { tesla: 'tesla', 'model 3': 'model 3',
  // 'model X': 'model X', 'model Y': 'model Y' }
  type result = TupleToObject<typeof tuple>;
}
