export default function updateStudentGradeByCity(obj, city, grades) {
  if (!(Array.isArray(obj))) {
    return [];
  }
  return obj.filter(({ location }) => location === city).map((obj) => {
    for (const grade of grades) {
      if (grade.studentId === obj.id) {
        return { ...obj, grade: grade.grade };
      }
    }
    return { ...obj, grade: 'N/A' };
  });
}
