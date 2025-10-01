function merge(a, b) {
  let c = new Set();
  let result = [];

  while (a.length !== 0 && b.length !== 0) {
    if (a[0] > b[0]) {
      if (!c.has(b[0])) {
        c.add(b[0]);
        result.push(b[0]);
      }
      b = b.slice(1);
    } else {
      if (!c.has(a[0])) {
        c.add(a[0]);
        result.push(a[0]);
      }
      a = a.slice(1);
    }
  }

  while (a.length !== 0) {
    if (!c.has(a[0])) {
      c.add(a[0]);
      result.push(a[0]);
    }
    a = a.slice(1);
  }

  while (b.length !== 0) {
    if (!c.has(b[0])) {
      c.add(b[0]);
      result.push(b[0]);
    }
    b = b.slice(1);
  }

  return result;
}

function sort(array) {
  if (array.length === 1) {
    return array;
  }

  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);

  let arrayOne = sort(left);
  let arrayTwo = sort(right);

  return merge(arrayOne, arrayTwo);
}

export { sort };
