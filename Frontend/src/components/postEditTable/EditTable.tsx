import { Button, Input, Table } from "@chakra-ui/react";
import axios from "axios";
import { memo, useEffect, useState, type FC } from "react";
import type { MealType } from "../../type/MealType";
import { formatDate } from "../../utils/FormatDate";

type Props = {
  meals: Array<MealType>;
};

export const EditTable: FC<Props> = memo((props) => {
  const { meals } = props;

  const [meal, setMeal] = useState({
    id: meals[0].id,
    date: meals[0].date,
    breakfastmealno1: meals[0].breakfastmealno1,
    breakfastmealno2: meals[0].breakfastmealno2,
    breakfastmealno3: meals[0].breakfastmealno3,
    breakfastmealno4: meals[0].breakfastmealno4,
    breakfastmealno5: meals[0].breakfastmealno5,
    breakfastmealno6: meals[0].breakfastmealno6,
    breakfastmealno7: meals[0].breakfastmealno7,
    lunchmealno1: meals[0].lunchmealno1,
    lunchmealno2: meals[0].lunchmealno2,
    lunchmealno3: meals[0].lunchmealno3,
    lunchmealno4: meals[0].lunchmealno4,
    lunchmealno5: meals[0].lunchmealno5,
    lunchmealno6: meals[0].lunchmealno6,
    lunchmealno7: meals[0].lunchmealno7,
    dinnermealno1: meals[0].dinnermealno1,
    dinnermealno2: meals[0].dinnermealno2,
    dinnermealno3: meals[0].dinnermealno3,
    dinnermealno4: meals[0].dinnermealno4,
    dinnermealno5: meals[0].dinnermealno5,
    dinnermealno6: meals[0].dinnermealno6,
    dinnermealno7: meals[0].dinnermealno7,
  });

  //テーブルの値取得
  const handleMeal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //mealが再検索で変更された際に状態に反映する
  useEffect(() => {
    setMeal(meals[0]);
  }, [meals]);

  //編集ボタン押下後
  const onClickEdit = () => {
    const editMeal = async () => {
      await axios
        .put(`${import.meta.env.VITE_API_SERVER}/edit/${meal.id}/put`, meal)
        .catch((e) => {
          console.error(e);
        });
    };
    editMeal();
  };

  return (
    <div>
      <Table.Root w="80%" m="0 auto">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader></Table.ColumnHeader>
            <Table.ColumnHeader fontSize="40px" textAlign="center">
              {formatDate(meal.date)}
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell rowSpan={7} fontSize="40px" textAlign="center">
              朝
            </Table.Cell>
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
            <Table.Cell rowSpan={7} fontSize="40px" textAlign="center">
              昼
            </Table.Cell>
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
            <Table.Cell rowSpan={7} fontSize="40px" textAlign="center">
              夕
            </Table.Cell>
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
      <Button onClick={onClickEdit}>編集を反映する</Button>
    </div>
  );
});
