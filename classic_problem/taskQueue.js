// 11. 设计一个简单的任务队列，要求分别在 1,3,4 秒后打印出 "1", "2", "3"

class TaskQueue {
  constructor () {
    this.queue = [];
    this.time = 0;
  }

  addTask (task, t) {
    this.time += t;
    this.queue.push([task, this.time]);
    return this;
  }

  start () {
    this.queue.forEach((item, index) => {
      setTimeout(() => {
        item[0]();
      }, item[1]);
    });
  }
}

export default TaskQueue;
