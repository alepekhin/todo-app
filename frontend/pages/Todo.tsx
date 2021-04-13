import { TodoFilter } from '../components/Filter'
import { TodoHeader } from '../components/Header'
import { TodoInput } from '../components/Input'
import { TodoList } from '../components/TodoList'
import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY } from '../utils'
import { getUser } from '../utils'
import Router from 'next/router'

// Anonymous arrow functions cause Fast Refresh to not preserve local component state
// Use this pattern instead!!!
const Todo = () => {

  const { data, loading, error, refetch } = useQuery(QUERY, {
    variables: { user: getUser(), ssr: false },
  })

  if (process.browser && !getUser()) {
    Router.replace('/Home')
  }
  if (loading) {
    return null
    //return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
    //return <>{error.toString()}</>
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
/*
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
*/
export default Todo
