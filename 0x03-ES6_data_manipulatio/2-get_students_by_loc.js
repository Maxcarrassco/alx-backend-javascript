export default function getStudentsByLocation(obj, city) {
  if (Array.isArray(obj)) {
    return obj.filter(({ location }) => location === city);
  }
  return [];
}
