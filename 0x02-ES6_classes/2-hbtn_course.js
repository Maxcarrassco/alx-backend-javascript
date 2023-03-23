export default class HolbertonCourse {
  constructor(name, length, students) {
    this.setName(name);
    this.setLength(length);
    this.setStudents(students);
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name; // eslint-disable-line
  }

  setLength(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length; // eslint-disable-line
  }

  setStudents(students) {
    if (typeof students !== 'object') {
      throw TypeError('students must be array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw TypeError('students must be array of strings');
      }
    }
    this._students = students; // eslint-disable-line
  }

  getName() {
    return this._name; // eslint-disable-line
  }

  getLength() {
    return this._length; // eslint-disable-line
  }

  getStudents() {
    return this._students; // eslint-disable-line
  }
}
