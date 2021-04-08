import { TodoFilter } from '../components/Filter'
import { TodoHeader } from '../components/Header'
import { TodoInput } from '../components/Input'
import { TodoList } from '../components/TodoList'
import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY } from '../utils'
import { getUser } from '../utils'

// Anonymous arrow functions cause Fast Refresh to not preserve local component state
// Use this pattern instead!!!
const Todo = () => {
  const { data, loading, error, refetch } = useQuery(QUERY, {
    variables: { user: getUser() },
  })

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput refetch={refetch} />
      <TodoFilter />
      <TodoList todos={data.todos} refetch={refetch} />
    </div>
  )
}

export default Todo
