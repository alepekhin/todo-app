import React, {useEffect } from "react";
import { TodoCard } from "./Card";
import { useReactiveVar } from "@apollo/client";
import { todoFilter } from '../utils'



export default function TodoList({todos, refetch}) {
  const done = useReactiveVar(todoFilter);

  const listItems = todos.filter(todo => todo.done === done).map((todo) => (
    <TodoCard
      user={todo.user}
      key={todo._id}
      id={todo._id}
      description={todo.description}
      done={todo.done}
      refetch={refetch}
    />
  ));

  return (
    <>
    {listItems}
    </>
  )
}
