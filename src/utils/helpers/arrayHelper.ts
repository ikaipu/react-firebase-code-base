/*
 * function rangeArray
 *
 * return Array has elements from start to end
 *
 * if (start <= end) elements are in ascending order;
 * else              elements are in descending order;
 */
export const rangeArray = (start: number, end: number): Array<number> => {
  const array: Array<number> = [];
  const order = start < end ? 'asc' : 'desc';

  if (order === 'asc') {
    let i = Math.floor(start);
    while (i < end + 1) {
      array.push(i);
      i += 1;
    }
  }

  if (order === 'desc') {
    let i = Math.floor(start);
    while (i > end - 1) {
      array.push(i);
      i -= 1;
    }
  }

  return array;
};
