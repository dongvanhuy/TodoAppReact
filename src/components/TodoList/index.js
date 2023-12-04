import React from "react";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewTodo }  from './todoSlice';
import { todoRemaningSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priorities, setPriorities] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemaningSelector);

  const handleAddButtonClick = () => {

    dispatch(addNewTodo({
      id: uuidv4(),
      name: todoName,
      priorities: priorities,
      completed: false,
    }))
    setTodoName("");
    setPriorities("Medium");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriorities(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100%- 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            priorities={todo.priorities}
          ></Todo>
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priorities}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
