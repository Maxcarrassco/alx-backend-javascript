export default function iterateThroughObject (reportWithIterator) {
  const output = [];
  for (const empl of reportWithIterator) { output.push(empl); }
  return output.join(' | ');
}
