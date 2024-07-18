/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return undefined;
  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  while (firstValue > queue.peek()) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }
  return firstValue;
}
