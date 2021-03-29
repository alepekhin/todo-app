import React from "react";
import { TodoCard } from "./Card";
import { useQuery, gql } from "@apollo/client";
import ClientOnly from "./ClientOnly";

export interface TodoType {
  id: string;
  description: string;
  done: boolean;
}

const QUERY = gql`
  query todos {
    todos {
      _id
      description
      done
    }
  }
`;

export default function TodoList() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const todos = data.todos;

  const listItems = todos.map((todo) => (
    <TodoCard
      key={todo._id}
      id={todo._id}
      description={todo.description}
      done={todo.done}
    />
  ));

  return <ClientOnly>{listItems}</ClientOnly>;
}
