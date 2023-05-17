let obj1 = {
  a: {
    f: 5,
    b: {
      e: [1, 2, 3],
      c: 0,
    },
  },
};

function deepClone(source) {
  if (typeof source !== "object" || source === null) {
    return source;
  }

  let target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // 确保深拷贝只复制对象自身的属性，而不复制原型链上的属性
      // for...in 循环遍历对象时，会遍历对象自身的属性以及继承的属性
      // 使用 hasOwnProperty 方法来检查对象的每个属性是否是对象自身的属性
      target[key] = deepClone(source[key]);
    }
  }
  return target;
}

let obj2 = deepClone(obj1);

obj1.a.b.c = 2;
obj1.a.e = 5;

console.log(11, obj1);
console.log(11, obj2);
