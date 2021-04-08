import { todoFilter } from '../utils'

export const TodoFilter = () => {
  const openHandler = () => {
    todoFilter(false)
  }

  const closeHandler = () => {
    todoFilter(true)
  }

  return (
    <div>
      <p />
      <span>Show: </span>
      <input
        type="radio"
        name="filter"
        onClick={openHandler}
        defaultChecked
      />{' '}
      Opened
      <input type="radio" name="filter" onClick={closeHandler} />
      Closed
    </div>
  )
}
