interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const s1: Student = {
  firstName: 'Maxwell',
  lastName: 'Dorliea',
  age: 75,
  location: 'Monrovia'
};

const s2: Student = {
  firstName: 'Prince',
  lastName: 'Dahn',
  age: 85,
  location: 'Monrovia'
};

const studentsList: Student[] = [s1, s2];
