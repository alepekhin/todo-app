import Button from "react-bootstrap/Button";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setUser,  } from "./slice";

export default function Home() {
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(setUser("guest"));
    Router.push("/todo");
  };

  const onLoginClick = () => {
    dispatch(setUser("my logged user"));
    Router.push("/todo");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4 text-center">
          <Button
            className="rounded-pill"
            variant="primary"
            onClick={onLoginClick}
          >
            Login with Google
          </Button>
        </div>
        <div className="col-12 mt-4 text-center">
          <Button variant="link" onClick={onLinkClick}>
            Continue as guest
          </Button>
        </div>
      </div>
    </div>
  );
}
