class Sub {
  constructor() {
    this.subObj = {};
  }

  // 订阅
  subscribe(event, callback) {
    if (!this.subObj[event]) {
      this.subObj[event] = [];
    }

    this.subObj[event].push(callback);
  }

  // 发布
  publish(event, data) {
    if (!this.subObj[event]) {
      return;
    }
    this.subObj[event].forEach((callback) => {
      return callback(data);
    });
  }

  unSubscribe(event, callback) {
    if (!this.subObj[event]) {
      return;
    }
    this.subObj[event] = this.subObj[event].filter(
      (eventCallback) => eventCallback !== callback
    );
  }
}

const pubSub = new Sub();

const a = (data) => {
  console.log("事件a触发了", data);
};

const b = (data) => {
  console.log("事件b触发了", data);
};

const subscribe1 = pubSub.subscribe("事件a", a);
const subscribe2 = pubSub.subscribe("事件b", b);

pubSub.unSubscribe("事件a", a);

pubSub.publish("事件a", "穿参数a");
pubSub.publish("事件b", "穿参数b");
