/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const frontValue = queue.dequeue();
  if (queue.peek() === undefined) return frontValue;
  queue.enqueue(frontValue);
  return queue.dequeue();
}
