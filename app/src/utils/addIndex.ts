export const addIndex = (existingNumbers: number[]): number => {
  let nextNumber = 1; // 自然数は1から始まるため、1から探し始めます

  while (existingNumbers.includes(nextNumber)) {
      nextNumber++; // 配列に含まれている場合、次の数に進みます
  }

  return nextNumber; // 重複しない最小の数を返します
}