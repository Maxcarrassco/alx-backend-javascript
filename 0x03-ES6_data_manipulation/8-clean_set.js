export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const arr = [];
  set.forEach((ele) => {
    if (typeof ele === 'string' && ele.startsWith(startString)) {
      arr.push(ele.slice(startString.length));
    }
  });
  return arr.join('-');
}
