import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { TodoItems } from "./TodoItems";
import { TTodo } from "../../types/Todo";

type Props = {
  todoList: TTodo[];
  onDelete(id: TTodo["id"]): void;
  onSelectTodo(todo: TTodo): void;
  onClearAll(): void;
};

const TodoList = ({ todoList, onDelete, onSelectTodo, onClearAll }: Props) => {
  return (
    <Card>
      {/*Todo Header*/}
      <CardHeader
        variant="gradient"
        color="green"
        className="flex mb-4  justify-between items-center px-4 h-20"
        floated={false}
        shadow
      >
        <div className="flex items-center gap-2">
          <Typography>Todo</Typography>
          <div>
            <span className="h-[50px] w-[50px] rounded-full bg-gray-500  p-2">
              {todoList.length}
            </span>
          </div>
        </div>
        <div>
          <Button onClick={onClearAll}>Clear All</Button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-wrap gap-2 ">
        {todoList.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onSelectTodo={onSelectTodo}
          />
        ))}
      </CardBody>
      {/*TodoList*/}
    </Card>
  );
};

export default TodoList;
