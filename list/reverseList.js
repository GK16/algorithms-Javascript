// 反转单向链表

// 需要将一个单向链表反转。
// 使用三个变量分别表示当前节点和当前节点的前后节点，

// 思路是从头节点往后遍历，先获取下一个节点，
// 然后将当前节点的 next 设置为前一个节点，然后再继续循环。

function reverseList (head) {
  // 判断下变量边界问题
  if (!head || !head.next) {
    return head;
  }
  // 初始设置为空，因为第一个节点反转后就是尾部，尾部节点指向 null
  let prev = null;
  let current = head;
  let next;

  while (current) { // 判断当前节点是否为空
    next = current.next; // 更新 next
    current.next = prev; // 核心步骤：把当前节点的 next 设为上一个节点
    prev = current; // 更新 prev
    current = next; // 更新 current
  }

  return prev;
}

export default reverseList;
