// // 组合式继承
// function Parent(value) {
//   this.val = value;
// }

// Parent.prototype.getValue = function () {
//   console.log(this.val);
// };

// function Child(value) {
//   Parent.call(this, value);
// }

// Child.prototype = new Parent(); // 问题所在由于调用了一次父类构造函数 导致子类的原型 上多了不需要的父类属性，存在内存上的浪费

// const child = new Child(1);

// child.getValue();

// console.log(child instanceof Parent);

// 寄生组合式继承
function Parent(value) {
  this.val = value;
}

Parent.prototype.getValue = function () {
  console.log(this.val);
};

function Child(value) {
  Parent.call(this, value);
}

function create(obj) {
  function F() {}
  F.prototype = obj.prototype;
  return new F();
}

Child.prototype = create(Parent);
Child.prototype.constructor = Child;

const child = new Child(2);

child.getValue();

console.log(child instanceof Parent);

// class 继承
// class Parent {
//   constructor(value) {
//     this.val = value;
//   }

//   getValue() {
//     console.log(this.val);
//   }
// }

// class Child extends Parent {
//   constructor(value) {
//     super(value);
//   }
// }

// const child = new Child(1);

// child.getValue();

// console.log(child instanceof Parent);

// console.log(child);
