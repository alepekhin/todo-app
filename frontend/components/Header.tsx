import { userVar } from "../utils";
import { useReactiveVar } from "@apollo/client";

export interface TodoHeaderProps {
  user: string;
}

export const TodoHeader = (props: TodoHeaderProps) => {
  const user = useReactiveVar(userVar);
  return (
    <div>
      <h5>User: {user}</h5>
      <h1>User's Todo List</h1>
    </div>
  );
};
