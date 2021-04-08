import {
  todoText,
  todoId,
  todoDone,
  DELETE_TODO,
  UPDATE_TODO,
  TodoType,
} from '../utils'
import { gql, useMutation } from '@apollo/client'

interface CardProps extends TodoType {
  refetch: () => {}
}

export const TodoCard = ({
  user,
  _id,
  description,
  done,
  refetch,
}: CardProps) => {
  const [deleteTodo, { data }] = useMutation(DELETE_TODO)
  const [updateTodo, {}] = useMutation(UPDATE_TODO)

  const deleteHandler = () => {
    deleteTodo({ variables: { id: _id } })
    todoText('')
    todoId('')
    refetch()
  }

  const reopenHandler = () => {
    updateTodo({ variables: { id: _id, done: false } })
  }

  const closeHandler = () => {
    updateTodo({ variables: { id: _id, done: true } })
  }

  const editHandler = (e) => {
    todoText(description)
    todoId(_id)
    todoDone(done)
  }

  return (
    <div>
      <p />
      <b>{description}</b>
      <br />
      {done ? (
        <span onClick={reopenHandler} style={{ cursor: 'pointer' }}>
          {' '}
          REOPEN
        </span>
      ) : (
        <span onClick={closeHandler} style={{ cursor: 'pointer' }}>
          {' '}
          CLOSE
        </span>
      )}
      <span onClick={editHandler} style={{ cursor: 'pointer' }}>
        {' '}
        EDIT
      </span>
      <span onClick={deleteHandler} style={{ cursor: 'pointer' }}>
        {' '}
        DELETE
      </span>
    </div>
  )
}
