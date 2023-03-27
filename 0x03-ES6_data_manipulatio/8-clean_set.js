export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const arr = [];
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      arr.push(ele.slice(startString.length));
    }
  });
  return arr.join('-');
}
