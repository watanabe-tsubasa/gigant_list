import { ReactNode, createContext, useReducer, } from "react";
import { CategoryAction, CategoryDataType, DataContextType, DivisionAction, DivisionDataType } from "./types";
import { categoryData, divisionData } from "../utils/data";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [categories, CategoryDispatch] = useReducer(categoryReducer, {'読み込み中': 0});
  const [divisions, DivisionDispatch] = useReducer(divisionReducer, {0: '読み込み中'});
  const ContextValue = { categories, CategoryDispatch, divisions, DivisionDispatch };

  return (
    <DataContext.Provider value={ContextValue}>
      {children}
    </DataContext.Provider>
  )
} 

const categoryReducer = (state: CategoryDataType | null, action: CategoryAction): CategoryDataType => {
  switch (action.type) {
    case 'checked':
      return {...state};
    case 'fetch':
      return categoryData;
    case 'unmount':
      return {'読み込み中': 0};
    default:
      throw new Error('undefined action')
  }
}

const divisionReducer = (state: DivisionDataType | null, action: DivisionAction): DivisionDataType => {
  switch (action.type) {
    case 'rename':
      return {...state};
    case 'fetch':
      return divisionData;
    case 'unmount':
      return {0: '読み込み中'};
    default:
      throw new Error('undefined action')
  }
}