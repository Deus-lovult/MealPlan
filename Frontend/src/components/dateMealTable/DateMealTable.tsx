import { useCtx } from "../../ContextProvider/MealsContext";
import { EditTable } from "../postEditTable/EditTable";
import { PostTable } from "../postEditTable/PostTable";

export const DateMealTable = () => {
  //コンテキスト取得
  const { meals } = useCtx();

  //新規，更新判断用フラグ
  //true:編集レイアウト
  //false:新規登録レイアウト
  let postEditFlg = false;

  if (meals === undefined || meals.length > 1) {
    //献立データが空，または，1件より大きい場合returnする
    return null;
  } else if (meals.length === 1) {
    //データが1件の場合は，更新用レイアウトに変更
    postEditFlg = true;
  } else {
    //データが0件の場合は，新規登録用レイアウトに変更
    postEditFlg = false;
  }

  return (
    <>
      <div>
        {postEditFlg ? (
          <div>
            <EditTable meals={meals} />
          </div>
        ) : (
          <div>
            <PostTable />
          </div>
        )}
      </div>
    </>
  );
};
