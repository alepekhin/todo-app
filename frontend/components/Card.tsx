
import { userVar } from '../utils'

export interface TodoCardProps {
  id: string;
  description: string;
  done: boolean;
}

export const TodoCard = (props: TodoCardProps) => {


  const deleteHandler = (e) => {
    console.log('clicked')
    userVar('papa')
  }

  return (
    <div>
      _id: {props.id}
      {props.done ? "REOPEN" : "CLOSE"}
            EDIT
            <div onClick={deleteHandler}>DELETE</div>
    </div>
  );
};
