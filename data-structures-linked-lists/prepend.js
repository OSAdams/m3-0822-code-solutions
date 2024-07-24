/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const headOfList = new LinkedList(value);
  headOfList.next = list;
  return headOfList;
}
