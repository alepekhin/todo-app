import {todoFilter} from '../utils'

export const TodoFilter = ({refetch}) => {
  
  const openHandler = e => {
    todoFilter(false)
  }

  const closeHandler = e => {
    todoFilter(true)
  }
  
  return (
    <div>
      <p/>
      <span>Show: </span>
      <input type="radio" name="filter" onClick={openHandler} defaultChecked/> Opened
      <input type="radio" name="filter"  onClick={closeHandler} /> Closed
    </div>
  );
};
