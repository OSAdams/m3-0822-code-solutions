/* exported takeFront */

function takeFront(queue) {
  const front = queue.peek();
  queue.dequeue();
  return front;
}
