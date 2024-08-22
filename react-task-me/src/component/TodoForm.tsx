import { Button, Card, CardBody, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { TTodo } from "../types/Todo";

type Props = {
  onSubmit(name: string): void;
  todo: TTodo | undefined;
};

const TodoForm = ({ onSubmit, todo }: Props) => {
  const [taskName, setTaskName] = useState(todo?.name ?? "");

  useEffect(() => {
    if (todo?.name) {
      setTaskName(todo.name);
    }
  }, [todo]);

  const handleClick = () => {
    onSubmit(taskName);
    setTaskName(""); // Clear the input field after submission
  };
  return (
    <Card className="w-full ">
      <CardBody className="flex justify-center flex-col items-center">
        <Input
          label="Todo Name"
          placeholder="Add Todo Here"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <Button size="md" className="mt-2" color="green" onClick={handleClick}>
          Submit
        </Button>
      </CardBody>
    </Card>
  );
};

export default TodoForm;
