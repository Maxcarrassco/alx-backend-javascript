export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) {
    return obj.map(({ id }) => id);
  }
  return [];
}
