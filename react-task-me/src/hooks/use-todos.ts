import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TTodo } from "../types/Todo";

export function useTodoList() {
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  const addTodo = (name: string) => {
    const newTodo = {
      id: uuidv4(),
      name,
      finished: false,
      createAt: new Date(),
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const updateTodo = (id: string, name: string) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === id ? { ...todo, name } : todo))
    );
  };

  const clearAll = () => {
    setTodoList([]);
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
    updateTodo,
    clearAll,
  };
}
