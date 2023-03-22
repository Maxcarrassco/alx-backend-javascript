export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const fn = mathFunction();
    queue.push(fn);
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
