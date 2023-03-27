export default function getStudentIdsSum(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((currSum, { id }) => currSum + id, 0);
  }
  return 0;
}
