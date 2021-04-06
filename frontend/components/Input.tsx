import React, { useState, useEffect } from "react";
import { TodoType } from "../utils";
import { todoText, todoId, ADD_TODO, UPDATE_TODO } from "../utils";
import { useReactiveVar } from "@apollo/client";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";

export const TodoInput = ({refetch}) => {
  const [addTodo, { data }] = useMutation(ADD_TODO);
  const [updateTodo, { }] = useMutation(UPDATE_TODO);
  const text = useReactiveVar(todoText);
  const id = todoId()
  const [val, setVal] = useState("");
  const user = sessionStorage.getItem("user")

  useEffect(() => {
    setVal(text);
  }, [text]);

  const onChangeHanler = (e) => {
    setVal(e.target.value);
  };

  const onClickHanler = (e) => {
    if (todoId()) {
      updateTodo({ variables: { id:id, descr: val } });
    } else {
      addTodo({ variables: { user:user, descr: val } });
    }
    todoId('')
    todoText('')
    setVal('')
    refetch()
  };

  return (
    <div>
      <input value={val} onChange={onChangeHanler} placeholder="What needs to be done"/>
      <button onClick={onClickHanler}> Submit</button>
    </div>
  );
};
