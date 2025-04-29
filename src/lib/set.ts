export const toggleSet = <T>(set: Set<T>, value: T): Set<T> => {
  const toggled = new Set(set);

  if (set.has(value)) {
    toggled.delete(value);
  } else {
    toggled.add(value);
  }

  return toggled;
};
