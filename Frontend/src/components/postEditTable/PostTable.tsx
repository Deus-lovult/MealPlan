import { Button, Input, Table } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCtx } from "../../ContextProvider/MealsContext";
import { formatDate } from "../../utils/FormatDate";

export const PostTable = () => {
  const { date } = useCtx();

  const [meal, setMeal] = useState({
    date: date!.replaceAll("-", ""),
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
  });

  //テーブルの値取得
  const handleMeal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //日付が変わったら状態へ反映させる
  useEffect(() => {
    setMeal((prev) => ({
      ...prev,
      date: date!.replaceAll("-", ""),
    }));
  }, [date]);

  //登録ボタン押下後
  const onClickPost = () => {
    const postMeal = async () => {
      await axios
        .post(`${import.meta.env.VITE_API_SERVER}/edit/post`, meal)
        .catch((e) => {
          console.error(e);
        });
    };
    postMeal();
  };

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader></Table.ColumnHeader>
            <Table.ColumnHeader>{formatDate(meal.date)}</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell rowSpan={7}>朝</Table.Cell>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno1"
                onChange={handleMeal}
                value={meal.breakfastmealno1}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno2"
                onChange={handleMeal}
                value={meal.breakfastmealno2}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno3"
                onChange={handleMeal}
                value={meal.breakfastmealno3}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno4"
                onChange={handleMeal}
                value={meal.breakfastmealno4}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno5"
                onChange={handleMeal}
                value={meal.breakfastmealno5}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno6"
                onChange={handleMeal}
                value={meal.breakfastmealno6}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="breakfastmealno7"
                onChange={handleMeal}
                value={meal.breakfastmealno7}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell rowSpan={7}>昼</Table.Cell>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno1"
                onChange={handleMeal}
                value={meal.lunchmealno1}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno2"
                onChange={handleMeal}
                value={meal.lunchmealno2}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno3"
                onChange={handleMeal}
                value={meal.lunchmealno3}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno4"
                onChange={handleMeal}
                value={meal.lunchmealno4}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno5"
                onChange={handleMeal}
                value={meal.lunchmealno5}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno6"
                onChange={handleMeal}
                value={meal.lunchmealno6}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="lunchmealno7"
                onChange={handleMeal}
                value={meal.lunchmealno7}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell rowSpan={7}>夕</Table.Cell>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno1"
                onChange={handleMeal}
                value={meal.dinnermealno1}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno2"
                onChange={handleMeal}
                value={meal.dinnermealno2}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno3"
                onChange={handleMeal}
                value={meal.dinnermealno3}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno4"
                onChange={handleMeal}
                value={meal.dinnermealno4}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno5"
                onChange={handleMeal}
                value={meal.dinnermealno5}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno6"
                onChange={handleMeal}
                value={meal.dinnermealno6}
              ></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Input
                variant="outline"
                name="dinnermealno7"
                onChange={handleMeal}
                value={meal.dinnermealno7}
              ></Input>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Button onClick={onClickPost}>新規登録</Button>
    </>
  );
};
