import { Table } from "@chakra-ui/react";
import { memo, type FC } from "react";
import type { MealType } from "../../type/MealType";
import { formatDate } from "../../utils/FormatDate";
import "./MealTableList.css";

type Props = {
  mealTableList?: Array<MealType>;
  startDate: string;
};

//曜日配列
const dayOfWeekArray = ["日", "月", "火", "水", "木", "金", "土"];

export const MealTableList: FC<Props> = memo((props) => {
  let { mealTableList, startDate } = props;

  //0件または，undefinedの時
  if (mealTableList === undefined || mealTableList.length === 0) {
    return null;
  }

  //日付に「-」が含まれていれば除去する
  if (startDate.includes("-")) {
    startDate = startDate.replaceAll("-", "");
  }

  //日付を日数分加算する
  const addDate = (strDate: string, days: number) => {
    let tmp: string =
      strDate.slice(0, 4) +
      "/" +
      strDate.slice(4, 6) +
      "/" +
      strDate.slice(6, 8);

    //日付型に変換する
    let date: Date = new Date(tmp);

    // 日付に日数を加算
    date.setDate(date.getDate() + days);

    return (
      String(date.getFullYear()) +
      String(("0" + (date.getMonth() + 1)).slice(-2)) +
      String(("0" + date.getDate()).slice(-2))
    );
  };

  //表示位置計算用日付
  let tempDate: string = startDate;

  //1週間分用配列
  const weekArray: Array<MealType> = [];

  //1週間分になるように編集(献立が登録されていない日の空配列を入れる)
  for (let i = 0; i < 7; i++) {
    //日付に一致するデータ検索
    const findResult = mealTableList.find((value) => value.date === tempDate);

    if (typeof findResult !== "undefined") {
      //献立が登録されていた場合
      //検索結果をそのまま追加
      weekArray.push(findResult);
    } else {
      //上記以外の場合
      //空の配列を挿入

      let emptyValue: MealType = {
        id: -1,
        date: tempDate,
        breakfastmealno1: "",
        breakfastmealno2: "",
        breakfastmealno3: "",
        breakfastmealno4: "",
        breakfastmealno5: "",
        breakfastmealno6: "",
        breakfastmealno7: "",
        lunchmealno1: "",
        lunchmealno2: "",
        lunchmealno3: "",
        lunchmealno4: "",
        lunchmealno5: "",
        lunchmealno6: "",
        lunchmealno7: "",
        dinnermealno1: "",
        dinnermealno2: "",
        dinnermealno3: "",
        dinnermealno4: "",
        dinnermealno5: "",
        dinnermealno6: "",
        dinnermealno7: "",
      };
      weekArray.push(emptyValue);
    }
    tempDate = addDate(tempDate, 1);
  }

  //一時退避用配列
  const breakfastMealNo1Array: Array<string> = [];
  const breakfastMealNo2Array: Array<string> = [];
  const breakfastMealNo3Array: Array<string> = [];
  const breakfastMealNo4Array: Array<string> = [];
  const breakfastMealNo5Array: Array<string> = [];
  const breakfastMealNo6Array: Array<string> = [];
  const breakfastMealNo7Array: Array<string> = [];
  const lunchMealNo1Array: Array<string> = [];
  const lunchMealNo2Array: Array<string> = [];
  const lunchMealNo3Array: Array<string> = [];
  const lunchMealNo4Array: Array<string> = [];
  const lunchMealNo5Array: Array<string> = [];
  const lunchMealNo6Array: Array<string> = [];
  const lunchMealNo7Array: Array<string> = [];
  const dinnerMealNo1Array: Array<string> = [];
  const dinnerMealNo2Array: Array<string> = [];
  const dinnerMealNo3Array: Array<string> = [];
  const dinnerMealNo4Array: Array<string> = [];
  const dinnerMealNo5Array: Array<string> = [];
  const dinnerMealNo6Array: Array<string> = [];
  const dinnerMealNo7Array: Array<string> = [];

  //一覧表示用配列
  const viewBodyArray: Array<Array<string>> = []; //body
  const viewHeadArray: Array<string> = []; //header

  //一覧表示用に２次元配列に変換
  for (const [index, value] of weekArray.entries()) {
    console.log(typeof value);
    viewHeadArray.push(value.date);
    breakfastMealNo1Array.push(value.breakfastmealno1);
    breakfastMealNo2Array.push(value.breakfastmealno2);
    breakfastMealNo3Array.push(value.breakfastmealno3);
    breakfastMealNo4Array.push(value.breakfastmealno4);
    breakfastMealNo5Array.push(value.breakfastmealno5);
    breakfastMealNo6Array.push(value.breakfastmealno6);
    breakfastMealNo7Array.push(value.breakfastmealno7);
    lunchMealNo1Array.push(value.lunchmealno1);
    lunchMealNo2Array.push(value.lunchmealno2);
    lunchMealNo3Array.push(value.lunchmealno3);
    lunchMealNo4Array.push(value.lunchmealno4);
    lunchMealNo5Array.push(value.lunchmealno5);
    lunchMealNo6Array.push(value.lunchmealno6);
    lunchMealNo7Array.push(value.lunchmealno7);
    dinnerMealNo1Array.push(value.dinnermealno1);
    dinnerMealNo2Array.push(value.dinnermealno2);
    dinnerMealNo3Array.push(value.dinnermealno3);
    dinnerMealNo4Array.push(value.dinnermealno4);
    dinnerMealNo5Array.push(value.dinnermealno5);
    dinnerMealNo6Array.push(value.dinnermealno6);
    dinnerMealNo7Array.push(value.dinnermealno7);

    if (index === 6) {
      viewBodyArray.push(breakfastMealNo1Array);
      viewBodyArray.push(breakfastMealNo2Array);
      viewBodyArray.push(breakfastMealNo3Array);
      viewBodyArray.push(breakfastMealNo4Array);
      viewBodyArray.push(breakfastMealNo5Array);
      viewBodyArray.push(breakfastMealNo6Array);
      viewBodyArray.push(breakfastMealNo7Array);
      viewBodyArray.push(lunchMealNo1Array);
      viewBodyArray.push(lunchMealNo2Array);
      viewBodyArray.push(lunchMealNo3Array);
      viewBodyArray.push(lunchMealNo4Array);
      viewBodyArray.push(lunchMealNo5Array);
      viewBodyArray.push(lunchMealNo6Array);
      viewBodyArray.push(lunchMealNo7Array);
      viewBodyArray.push(dinnerMealNo1Array);
      viewBodyArray.push(dinnerMealNo2Array);
      viewBodyArray.push(dinnerMealNo3Array);
      viewBodyArray.push(dinnerMealNo4Array);
      viewBodyArray.push(dinnerMealNo5Array);
      viewBodyArray.push(dinnerMealNo6Array);
      viewBodyArray.push(dinnerMealNo7Array);
    }
  }

  return (
    <>
      <Table.ScrollArea borderWidth="5px" rounded="md" height="80vh">
        <Table.Root striped showColumnBorder interactive>
          <Table.Header className="headerSticky">
            <Table.Row>
              <Table.ColumnHeader></Table.ColumnHeader>
              {viewHeadArray.map((value, index) => {
                return (
                  <Table.ColumnHeader key={index} className="tableHeader">
                    {formatDate(value)}
                  </Table.ColumnHeader>
                );
              })}
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeader></Table.ColumnHeader>
              {dayOfWeekArray.map((value, index) => {
                return (
                  <Table.ColumnHeader key={index} className="tableHeader">
                    {value}
                  </Table.ColumnHeader>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {viewBodyArray.map((mealsArray, index) => {
              return (
                <Table.Row key={index}>
                  {index === 0 && (
                    <Table.Cell rowSpan={7} className="bodyText">
                      朝
                    </Table.Cell>
                  )}
                  {index === 7 && (
                    <Table.Cell rowSpan={7} className="bodyText">
                      昼
                    </Table.Cell>
                  )}
                  {index === 14 && (
                    <Table.Cell rowSpan={7} className="bodyText">
                      晩
                    </Table.Cell>
                  )}
                  {mealsArray.map((value, index) => {
                    return (
                      <Table.Cell key={index} className="bodyText">
                        {value}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </>
  );
});
