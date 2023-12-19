export const addIndex = (existingNumbers: number[]): number => {
  let nextNumber = 1;

  while (existingNumbers.includes(nextNumber)) {
      nextNumber++;
  }

  return nextNumber;
}