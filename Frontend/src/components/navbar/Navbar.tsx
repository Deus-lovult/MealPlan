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

  const onClickTodo = useCallback(() => {
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
            <Button
              onClick={onClickHome}
              css={{ "font-weight": "bold", "font-size": "22px" }}
              _hover={{ color: "white" }}
            >
              メインメニュー
            </Button>
          </div>
          <div className="menuBox">
            <Button
              onClick={onClickEdit}
              css={{ "font-weight": "bold", "font-size": "22px" }}
              _hover={{ color: "white" }}
            >
              献立編集
            </Button>
          </div>
          <div className="menuBox">
            <Button
              onClick={onClickTodo}
              css={{ "font-weight": "bold", "font-size": "22px" }}
              _hover={{ color: "white" }}
            >
              買い物リスト
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
});
