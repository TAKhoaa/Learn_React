import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TTodo } from "../types/todo";

export default function useTodoList() {
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

  const deleteTodo = (id: TTodo["id"]) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
  };
}
