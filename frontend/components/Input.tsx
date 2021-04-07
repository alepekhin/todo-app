import React, { useState, useEffect } from 'react'
import { TodoType } from '../utils'
import { todoText, todoId, ADD_TODO, UPDATE_TODO } from '../utils'
import { useReactiveVar } from '@apollo/client'
import { gql, useMutation } from '@apollo/client'
import Router from 'next/router'
import { getUser } from '../utils'

export const TodoInput = ({ refetch }) => {
  const [addTodo, { data }] = useMutation(ADD_TODO)
  const [updateTodo, {}] = useMutation(UPDATE_TODO)
  const text = useReactiveVar(todoText)
  const id = todoId()
  const [val, setVal] = useState('')
  const user = getUser()

  useEffect(() => {
    setVal(text)
  }, [text])

  const onChangeHanler = (e) => {
    setVal(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode == '13') {
      // submit by Enter key
      onClickHanler(e)
    }
  }

  const onClickHanler = (e) => {
    if (val) {
      if (todoId()) {
        updateTodo({ variables: { id: id, descr: val } })
      } else {
        addTodo({ variables: { user: user, descr: val } })
      }
      todoId('')
      todoText('')
      setVal('')
      refetch()
    }
  }

  return (
    <div>
      <input
        value={val}
        onChange={onChangeHanler}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done"
      />
      <button onClick={onClickHanler}> Submit</button>
    </div>
  )
}
