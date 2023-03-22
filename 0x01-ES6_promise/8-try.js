export default function divideFunction(numerator, denominator) {
  try {
    return numerator / denominator;
  } catch (_) {
    throw new Error('cannot divide by 0');
  }
}
