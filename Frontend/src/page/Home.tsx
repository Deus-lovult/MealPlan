import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { MealTableList } from "../components/mealtable/MealTableList";
import { Navbar } from "../components/navbar/Navbar";
import { useCtx } from "../ContextProvider/MealsContext";
import "./Home.css";

export const Home = () => {
  const d = new Date();

  //年
  const nowYear = String(d.getFullYear());

  //月
  const nowMonth = String(("0" + (d.getMonth() + 1)).slice(-2));

  //日
  const nowDate = String(("0" + d.getDate()).slice(-2));

  //今日
  const thisDate = nowYear + "-" + nowMonth + "-" + nowDate;

  //コンテキスト取得
  const { meals, setMeals } = useCtx();

  const [date, setDate] = useState<string>(thisDate);
  const [startDate, setStartDate] = useState<string>(thisDate);

  //選択した日の週の日曜日，土曜日を取得
  const StartAndEndOfThisWeek = (strDate: string) => {
    //日付型に変換する
    let selectDate = new Date(strDate);

    //年
    let thisYear = selectDate.getFullYear();

    //月
    let thisMonth = selectDate.getMonth();

    //日
    let thisDate = selectDate.getDate();

    //曜日取得
    let dayNum = selectDate.getDay();

    //日曜日取得
    let thisSunday = thisDate - dayNum;
    let thisSaturday = thisSunday + 6;

    //計算後の数値を使って日付に変換
    let startTime = new Date(thisYear, thisMonth, thisSunday);
    let endTime = new Date(thisYear, thisMonth, thisSaturday, 23, 59, 59, 999);

    //開始日，終了日をyyyy-MM-dd形式に変換
    let startDate =
      String(thisYear) +
      String(("0" + (startTime.getMonth() + 1)).slice(-2)) +
      String(("0" + startTime.getDate()).slice(-2));
    let endDate =
      String(thisYear) +
      String(("0" + (endTime.getMonth() + 1)).slice(-2)) +
      String(("0" + endTime.getDate()).slice(-2));

    return [startDate, endDate];
  };

  //テキストボックスに入力された日付からデータを取得
  const setInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  //検索ボタン押下時
  const onSearch = () => {
    //APIにアクセス
    const initGetMeals = async () => {
      let thisWeekDate = StartAndEndOfThisWeek(date);

      setStartDate(thisWeekDate[0]);

      await axios
        .get(`${import.meta.env.VITE_API_SERVER}/top/getWeekMeals`, {
          params: {
            startDate: thisWeekDate[0],
            endDate: thisWeekDate[1],
          },
        })
        .then((result) => {
          console.log(result.data);
          setMeals(result.data.data);
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
          value={date}
          onChange={(e) => {
            setInputDate(e);
          }}
        />
        <Button onClick={onSearch}>検索</Button>
      </div>

      <MealTableList mealTableList={meals} startDate={startDate} />
    </>
  );
};
