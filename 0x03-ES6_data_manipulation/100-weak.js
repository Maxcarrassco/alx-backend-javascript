export const weakMap = new WeakMap();

export const queryApi = (endpoint) => {
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    return;
  }
  weakMap.set(endpoint, 1);
};
