import { TodoFilter } from '../components/Filter'
import { TodoHeader } from '../components/Header'
import { TodoInput } from '../components/Input'
import TodoList from '../components/TodoList'
import { useQuery, gql } from '@apollo/client'
import Router from 'next/router'
import React from 'react'
import ClientOnly from '../components/ClientOnly'
import { QUERY } from '../utils'
import { getUser } from '../utils'

export default function Todo() {
  const { data, loading, error, refetch } = useQuery(QUERY, {
    variables: { user: getUser() },
    ssr: true,
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
      <TodoFilter refetch={refetch} />
      <ClientOnly>
        <TodoList todos={data.todos} refetch={refetch} />
      </ClientOnly>
    </div>
  )
}
