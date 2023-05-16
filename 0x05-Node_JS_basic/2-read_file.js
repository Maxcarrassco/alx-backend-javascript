const { readFileSync } = require('fs');

const countStudents = (file) => {
  try {
    const data = readFileSync(file, 'utf-8');
    const dataList = data.split('\n').splice(1);
    const stats = { CS: [], SWE: [] };
    let students = 0;
    for (const line of dataList) {
      const columns = line.split(',');
      if (columns[3] === 'CS') {
        stats.CS.push(columns[0]);
        students += 1;
      } else if (columns[3] === 'SWE') {
        stats.SWE.push(columns[0]);
        students += 1;
      }
    }
    console.log(`Number of students: ${students}`);
    for (const [key, value] of Object.entries(stats)) {
      console.log(`Number of students in ${key}: ${value.length}. ${value.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
