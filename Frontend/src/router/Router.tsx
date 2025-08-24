import { memo, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Edit } from "../page/Edit";
import { Home } from "../page/Home";
import { TodoList } from "../page/TodoList";

export const Router: FC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </>
  );
});
