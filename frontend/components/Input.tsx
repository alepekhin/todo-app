import React, { useState, useEffect } from 'react'
import { todoText, todoId, ADD_TODO, UPDATE_TODO } from '../utils'
import { useReactiveVar } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { getUser } from '../utils'

interface PropsType {
  refetch: () => {}
}

export const TodoInput: React.FC<PropsType> = ({ refetch }) => {
  const [addTodo, {}] = useMutation(ADD_TODO)
  const [updateTodo, {}] = useMutation(UPDATE_TODO)
  const text = useReactiveVar(todoText)
  const id = todoId()
  const [val, setVal] = useState('')
  const user = getUser()

  useEffect(() => {
    setVal(text)
  }, [text])

  const onChangeHanler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      saveTodo()
    }
  }

  const onClickHanler = () => {
    saveTodo()
  }

  const saveTodo = () => {
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
        onKeyPress={onKeyDown}
        placeholder="What needs to be done"
      />
      <button onClick={onClickHanler}> Submit</button>
    </div>
  )
}
