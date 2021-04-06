import { userVar } from "../utils";
import { todoText, todoId, todoDone, DELETE_TODO, UPDATE_TODO, TodoType } from "../utils";
import { gql, useMutation } from "@apollo/client";

export const TodoCard = (props) => {
  const [deleteTodo, { data }] = useMutation(DELETE_TODO);
  const [updateTodo, {}] = useMutation(UPDATE_TODO);

  const deleteHandler = (e) => {
    deleteTodo({ variables: { id: props.id } });
    todoText('')
    todoId('')
    props.refetch()
};

  const reopenHandler = (e) => {
    updateTodo({ variables: { id:props.id, done: false } });
  };

  const closeHandler = (e) => {
    updateTodo({ variables: { id:props.id, done: true } });
  };

  const editHandler = (e) => {
    todoText(props.description);
    todoId(props.id)
    todoDone(props.done)
  };

  return (
    <div>
      <p />
      <b>{props.description}</b>
      <br />
      {props.done ? (
        <span onClick={reopenHandler}> REOPEN</span>
      ) : (
        <span onClick={closeHandler}> CLOSE</span>
      )}
      <span onClick={editHandler} > EDIT</span>
      <span onClick={deleteHandler} > DELETE</span>
    </div>
  );
};
