import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { DateMealTable } from "../components/dateMealTable/DateMealTable";
import { Navbar } from "../components/navbar/Navbar";
import { useCtx } from "../ContextProvider/MealsContext";

export const Edit = () => {
  //コンテキスト取得
  const { setMeals, date, setDate } = useCtx();

  //日付更新前用
  const [tmpDate, setTmpDate] = useState<string>("");

  //テキストボックスに入力された日付からデータを取得
  const setInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpDate(e.target.value);
  };

  //検索ボタン押下時
  const onSearch = () => {
    //APIにアクセス
    const initGetMeals = async () => {
      //入力された日付のフォーマット修正
      let thisDate = tmpDate!.replaceAll("-", "");

      await axios
        .get(`${import.meta.env.VITE_API_SERVER}/edit/getEditTarget`, {
          params: {
            targetDate: thisDate,
          },
        })
        .then((result) => {
          console.log(result.data);
          setMeals(result.data);
          setDate(tmpDate);
        })
        .catch((e) => {
          console.error(e);
        });
    };

    initGetMeals();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <input
          type="date"
          className="nowYearMonth"
          value={tmpDate}
          onChange={(e) => {
            setInputDate(e);
          }}
        />
        <Button onClick={onSearch}>検索</Button>
      </div>
      {date && <DateMealTable />}
    </>
  );
};
