import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TTodo } from "../../types/Todo";

type Props = {
  todo: TTodo;
  onDelete(id: TTodo["id"]): void;
  onSelectTodo(todo: TTodo): void;
};

export function TodoItems({ todo, onDelete, onSelectTodo }: Props) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleSelectTodo = () => {
    onSelectTodo(todo);
  };
  return (
    <Card className="w-[310px] shadow-lg">
      <CardHeader floated={false} color="blue-gray"></CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {todo.name}
          </Typography>
        </div>
        <Typography color="gray">description </Typography>
      </CardBody>
      <CardFooter className="flex pt-3 gap-2">
        <Button
          size="sm"
          color="blue"
          fullWidth={true}
          onClick={handleSelectTodo}
        >
          Edit
        </Button>
        <Button size="sm" color="red" fullWidth={true} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
