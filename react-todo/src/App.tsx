import { FormEvent, useState } from "react";
import "./App.css";
import { TTodo } from "./types/todo";
import useTodoList from "./hooks/use-todo";

function App() {
  const [name, setName] = useState("");
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };

  const handleDelete = (id: TTodo["id"]) => {
    deleteTodo(id);
  };
  return (
    <div>
      <div className="w-[600px] mx-auto bg-gray-200 p-16 flex flex-col justify-center items-center space-y-8">
        {/*start of form*/}
        <div>
          <form className="w-[500px] bg-white  p-8" onSubmit={handleSubmit}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Add a new todo"
                className="input input-bordered w-full "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn btn-primary m-2">SUBMIT</button>
          </form>
        </div>
        {/*end of form*/}
        {/*start of todo list*/}
        <div className="w-full bg-white space-y-3">
          {todoList.map((todo) => (
            <div className="flex w-full bg-red-50 px-8 py-4" key={todo.id}>
              <div className="flex-1 ">{todo.name}</div>
              <div className="w-[140px] flex items-center justify-between">
                <button
                  className="btn btn-sm btn-outline btn-secondary"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button className="btn btn-sm btn-accent">Edit</button>
              </div>
            </div>
          ))}
        </div>
        {/*end of todo list*/}
      </div>
    </div>
  );
}

export default App;
