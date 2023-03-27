export default function hasValuesFromArray(set, array) {
  return array.reduce((bool, ele) => bool && set.has(ele), true);
}
