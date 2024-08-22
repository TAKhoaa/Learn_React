import { useState } from "react";

import { Header } from "./component/Header";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/Todos/TodoList";
import { TTodo } from "./types/Todo";
import { useTodoList } from "./hooks/use-todos";

function App() {
  const { todoList, addTodo, deleteTodo, updateTodo, clearAll } = useTodoList();
  const [todo, setTodo] = useState<TTodo | undefined>();

  const handleSubmitTask = (name: string) => {
    if (todo?.id) {
      updateTodo(todo?.id, name);
      setTodo(undefined);
    } else {
      addTodo(name);
    }
  };

  const handleDeleteTask = (id: string) => {
    deleteTodo(id);
  };

  const handleSelectTodo = (todo: TTodo) => {
    setTodo(todo);
  };
  return (
    <div className="container mx-auto">
      {/*Header*/}
      <div className="mt-8">
        <Header />
      </div>
      {/*End of Header*/}

      {/*TodoForm*/}
      <div className="mt-10">
        <TodoForm onSubmit={handleSubmitTask} todo={todo} />
      </div>
      {/*End of TodoForm*/}

      {/*TodoList*/}
      <div className="mt-8">
        <TodoList
          todoList={todoList}
          onDelete={handleDeleteTask}
          onSelectTodo={handleSelectTodo}
          onClearAll={clearAll}
        />
      </div>
      {/*End of TodoList*/}
    </div>
  );
}

export default App;
