import { Button } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCtx } from "../../ContextProvider/MealsContext";
import "./Navbar.css";

export const Navbar = memo(() => {
  const navigate = useNavigate();

  const { setMeals, setDate } = useCtx();

  const onClickHome = useCallback(() => {
    setMeals([]);
    setDate("");
    navigate("/home");
  }, [navigate]);

  const onClickEdit = useCallback(() => {
    setMeals([]);
    setDate("");
    navigate("/edit");
  }, [navigate]);

  const onClicTodo = useCallback(() => {
    setMeals([]);
    setDate("");
    navigate("/todo");
  }, [navigate]);

  return (
    <>
      <nav className="navBar">
        <Button className="navTitle sacramento-regular">Meal Plan</Button>

        {/*メニューボタン*/}
        <div className="menuContainer">
          <div className="menuBox">
            <Button onClick={onClickHome}>メインメニュー</Button>
          </div>
          <div className="menuBox">
            <Button onClick={onClickEdit}>献立編集</Button>
          </div>
          <div className="menuBox">
            <Button onClick={onClicTodo}>買い物リスト</Button>
          </div>
        </div>
      </nav>
    </>
  );
});
