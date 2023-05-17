const tree = {
  name: "Top",
  children: [
    {
      name: "Level 1",
      children: [
        {
          name: "Level 1-1",
          children: [],
        },
        {
          name: "Level 1-2",
          children: [],
        },
      ],
    },
    {
      name: "Level 2",
      children: [
        {
          name: "Level 2-1",
          children: [],
        },
        {
          name: "Level 2-2",
          children: [],
        },
      ],
    },
  ],
};

// 深度优先遍历
// const treeToList = (node) => {
//   let list = [];
//   if (node.name) {
//     list.push(node.name);
//   }
//   if (node.children.length) {
//     node.children.forEach((element) => {
//       list.push(...treeToList(element));
//     });
//   }
//   return list;
// };

// 广度优先遍历
const treeToList = (node) => {
  let list = [];
  let stack = [];
  stack.push(node);
  while (stack.length) {
    let current = stack.shift();
    current.name && list.push(current.name);
    current.children.length &&
      current.children.forEach((element) => {
        stack.push(element);
      });
  }
  return list;
};

console.log(treeToList(tree));
