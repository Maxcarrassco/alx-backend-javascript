export default function createIteratorObject(report) {
  return (function* _() {
    for (const obj of Object.values(report.allEmployees)) {
      for (const empl of obj) { yield empl; }
    }
  }());
}
