// TODO: useReducer refactoring

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

export interface CategoryProps {
  categories: Category[];
  currentCategoryId: string | null;
  setCategories: Dispatch<SetStateAction<Category[]>>;
  setCurrentCategoryId: Dispatch<SetStateAction<string | null>>;
}

export const CategoryContext = createContext<CategoryProps>({
  categories: [],
  currentCategoryId: null,
  setCategories: () => {},
  setCurrentCategoryId: () => null,
});

export const useCategoryContext = () => useContext(CategoryContext);

export const useCategoryProviderState = (): CategoryProps => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(
    null
  );

  return {
    categories,
    currentCategoryId,
    setCategories,
    setCurrentCategoryId,
  };
};

export const CategoryProvider = (props: { children: ReactNode }) => {
  const categoryContextValue = useCategoryProviderState();

  return (
    <CategoryContext.Provider value={categoryContextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};
