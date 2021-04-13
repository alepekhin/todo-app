import { TodoFilter } from '../components/Filter'
import { TodoHeader } from '../components/Header'
import { TodoInput } from '../components/Input'
import { TodoList } from '../components/TodoList'
import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY, user } from '../utils'
import Router from 'next/router'
import dynamic from "next/dynamic";

// Anonymous arrow functions cause Fast Refresh to not preserve local component state
// Use this pattern instead
const Todo = () => {
  // this should be called on the client side only
  const { data, loading, error, refetch } = useQuery(QUERY, {
    variables: { user: user() },
  })

  if (!user()) {
    Router.replace('/Home')
  }

  if (process.browser) {
    console.log('client rendering, user ',user())
  } else {
    console.log('server rendering')
  }

  if (loading) {
    console.log('Loading..., user ',user())
    //return <h2>Loading...</h2>
    return null
  }

  if (error) {
    console.log('Error ', error.toString())
    return <>{error.toString()}</>
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

// this is how to call page on client side only
export default dynamic(() => Promise.resolve(Todo),{ssr:false})
