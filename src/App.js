import React, { useEffect } from "react";
import { Typography, Divider } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./server";
import { useDispatch } from "react-redux";
import { addNewTodo, fetchTodo } from "./components/TodoList/todoSlice";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

const { Title } = Typography;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNewTodo({ id: 1, name: "Learn Yoga", completed: false, priorities: "Medium" }));
  }, []);
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>REACT JS - TODO APP</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
