import Router from "next/router";
import { userVar } from "../utils";

export default function Home() {
  const onLinkClick = () => {
    userVar("guest");
    Router.push("/Todo");
  };

  const onLoginClick = () => {
    userVar("alepekhin");
    Router.push("/Todo");
  };

  return (
    <div>
      <button onClick={onLoginClick}>Login with Google</button>
      <button onClick={onLinkClick}>Continue as guest</button>
    </div>
  );
}
