export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8array = new Int8Array(buffer, [position]);
  int8array[0] = value;
  return buffer;
}
