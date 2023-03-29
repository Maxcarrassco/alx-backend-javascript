export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !(startString instanceof String) || startString.length === 0) {
    return '';
  }
  const arr = [];
  set.forEach((ele) => {
    if (ele instanceof String && ele.startsWith(startString)) {
      arr.push(ele.slice(startString.length));
    }
  });
  return arr.join('-');
}
