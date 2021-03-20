import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter } from "./slice";

export const TodoFilter = () => {
  
  const dispatch = useDispatch();

  const openHandler = e => {
    dispatch(setFilter(false))
  }

  const closeHandler = e => {
    dispatch(setFilter(true))
  }
  
  return (
    <div className="text-end">
      Show: &nbsp;
      <Form.Check inline type="radio" label="OPEN" name="group1" id="open" onClick={openHandler} />
      <Form.Check inline type="radio" label="CLOSED" name="group1" id="close" onClick={closeHandler} />
    </div>
  );
};
