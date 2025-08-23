import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { MealType } from "../type/MealType";

//コンテキスト用型
type ValueContextType = {
  meals: Array<MealType> | undefined;
  setMeals: React.Dispatch<React.SetStateAction<Array<MealType> | undefined>>;
  date: string | undefined;
  setDate: React.Dispatch<React.SetStateAction<string | undefined>>;
};

//コンテキスト作成
export const ValueContext = createContext<ValueContextType | undefined>(
  undefined
);

//provider用の型
type Props = {
  children: ReactNode;
};

//undefinedチェックし，contextを作成する
export const useCtx = () => {
  const ctx = useContext(ValueContext);
  if (!ctx) {
    throw new Error("ValueContext が Provider でラップされていません");
  }
  return ctx;
};

//provider作成
export const ValueProvider: FC<Props> = (props) => {
  const { children } = props;
  const [meals, setMeals] = useState<Array<MealType>>();
  const [date, setDate] = useState<string>();
  return (
    <ValueContext.Provider value={{ meals, setMeals, date, setDate }}>
      {children}
    </ValueContext.Provider>
  );
};
