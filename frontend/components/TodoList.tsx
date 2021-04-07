import React, { useEffect } from 'react'
import { TodoCard } from './Card'
import { useReactiveVar } from '@apollo/client'
import { todoFilter } from '../utils'

export default function TodoList({ todos, refetch }) {
  const done = useReactiveVar(todoFilter)
  /*
  _id object includes create timestamp in seconds, so we can sort by it
  Because the array is frozen in strict mode, you'll need to copy the array before sorting it
  */
  const listItems = todos
    .slice()
    .sort((a, b) => (a._id < b._id ? 1 : -1))
    .filter((todo) => todo.done === done)
    .map((todo) => (
      <TodoCard
        user={todo.user}
        key={todo._id}
        id={todo._id}
        description={todo.description}
        done={todo.done}
        refetch={refetch}
      />
    ))

  return <>{listItems}</>
}
