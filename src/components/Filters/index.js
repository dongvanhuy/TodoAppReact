import React from "react";
import { Row, Col, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filtersStatus, setFiltersStatus] = useState("All");
  const [filtersPriorities, setFiltersPriorities] = useState([]);

  const dispatch = useDispatch();
  const handleInputSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFiltersChange(e.target.value));
  };
  const handleStatusChange = (e) => {
    setFiltersStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFiltersChange(e.target.value));
  };
  const handlePrioritiesChange = (value) => {
    setFiltersPriorities(value);
    dispatch(filtersSlice.actions.prioritiesFiltersChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleInputSearchChange}
        ></Search>
      </Col>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter by Status
        </Typography.Paragraph>
        <Radio.Group value={filtersStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter by Priorities
        </Typography.Paragraph>
        <Select
          mode="multiple"
          value={filtersPriorities}
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handlePrioritiesChange}
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
      </Col>
    </Row>
  );
}
