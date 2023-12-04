import { createSelector } from "@reduxjs/toolkit";

export const todoListSelectors = (state) => state.todoList.todo;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPriortiesSelector = (state) => state.filters.priorities;

export const todoRemaningSelector = createSelector(
  todoListSelectors,
  searchTextSelector,
  filterStatusSelector,
  filterPriortiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) &&
              priorities.includes(todo.priorities)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priorities) : true)
      );
    });
  }
);
