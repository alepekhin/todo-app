import { TodoFilter } from "../components/Filter";
import { TodoHeader } from "../components/Header";
import { TodoInput } from "../components/Input";
import TodoList from "../components/TodoList";
import { userVar } from '../utils'

export default function Todo({todos}) {
  return (
    <div className="container">
      <TodoHeader user={userVar()} />
      <TodoInput value="" id=""/>
      <TodoFilter/>
      <TodoList />
    </div>
  );
}

