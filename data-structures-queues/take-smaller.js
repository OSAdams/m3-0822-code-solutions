/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) return firstValue;
  if (queue.peek() > firstValue) {
    const secondValue = queue.dequeue(); // [ 1, 4, 18 ] -> [ 4, 18, 1]
    queue.enqueue(secondValue);
    return firstValue;
  }
  if (queue.peek() === firstValue) {
    const equalValue = queue.peek();
    const oneValue = queue.dequeue();
    queue.enqueue(oneValue);
    return equalValue;
  }
  if (queue.peek() < firstValue) {
    const aValue = queue.peek();
    queue.enqueue(firstValue);
    queue.dequeue();
    return aValue;
  }
}
