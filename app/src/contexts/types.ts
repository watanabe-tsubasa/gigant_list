import React from "react";

export interface DataContextType {
  categories: CategoryDataType;
  CategoryDispatch: React.Dispatch<CategoryAction>;
  divisions: DivisionDataType;
  DivisionDispatch: React.Dispatch<DivisionAction>;
}

export interface CategoryDataType {
  [key: string]: number;
}

export type CategoryAction =
  | { type: 'checked' }
  | { type: 'fetch' }
  | { type: 'unmount' };

export interface DivisionDataType {
  [key: number]: string;
}

export type DivisionAction =
  | { type: 'rename' }
  | { type: 'fetch' }
  | { type: 'unmount' };