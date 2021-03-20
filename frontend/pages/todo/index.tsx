import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { Guid } from "guid-typescript";
import { client } from "../../utils";
import { userSelector, todoSelector, statusSelector, filterSelector } from "../store";
import { useEffect } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTodos } from "./slice";
import { TodoCard } from "../../components/Card";
import { TodoFilter } from "../../components/Filter";

const id: string = uuid();

export interface TodoType {
  id: Guid;
  description: string;
  done: boolean;
}

export default function Todo() {
  const dispatch = useDispatch();
  // It's important to note that the component will re-render any time 
  // the value returned from useSelector changes to a new reference.
  const user = useSelector(userSelector);
  const todoStatus = useSelector(statusSelector);
  const todos = useSelector(todoSelector);
  const filter = useSelector(filterSelector);

  useEffect(() => {
    if (todoStatus === "idle") {
      console.log("dispatching fetchTodos");
      dispatch(fetchTodos());
    }
  }, [todoStatus, dispatch]);

  const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    console.log("fetching todos for user ", user);
    
    const { data } = await client.query({
      query: gql`
        query todos {
          todos {
            _id
            description
            done
          }
        }
      `,
    });
    /*
    const data = {
      getTodos: [
        {
          id: uuid(),
          description: 'Mock data',
          done: true
        },
        {
          id: uuid(),
          description: 'Use mocked data',
          done: false
        }
      ]
    }
    */
    console.log("data fetched ", data);
    console.log("dispatching setTodos");
    dispatch(setTodos(data.todos));
  });

  const listItems = todos.filter((todo) => todo.done === filter).map((todo) => (
        <TodoCard key={todo._id} 
          id={todo._id}
          description={todo.description}
          done={todo.done}
        />
  ));

  return (
    <div className="container">
      <TodoFilter />
      {listItems}
    </div>
  );
}
