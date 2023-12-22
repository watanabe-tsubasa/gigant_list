import { CategoryDataType } from "../contexts/types";

function generateRandomCategoryData(numItems: number): CategoryDataType {
  const baseKey = 1000100;
  const data: CategoryDataType = {};
  for (let i = 0; i < numItems; i++) {
    const key = (baseKey + i).toString();
    const value = Math.floor(Math.random() * 4); // 0, 1, 2, 3 のランダムな値を生成
    data[key] = value;
  }
  return data;
}

// 例: 10個のアイテムを生成する
export const categoryData = generateRandomCategoryData(1000);

export const divisionData = {
  1: '冷蔵温度帯',
  2: '冷凍温度帯',
  3: '常温温度帯',
}