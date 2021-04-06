import { useReactiveVar } from "@apollo/client";
import Router from "next/router";
import { getUser } from '../utils'

export const TodoHeader = () => {
  if (typeof window !== "undefined") {
    const user = getUser()
    if (user) {
      return (
        <div>
          <h5>User: {user}</h5>
          <h1>User's Todo List</h1>
        </div>
      );
    } else {
      Router.push("/Home");
      return null;
    }
  } else {
    return <div>user undefined</div>;
  }
};
