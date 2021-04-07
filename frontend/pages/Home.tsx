import Router from 'next/router'
import { saveUser } from '../utils'

export default function Home() {
  const onLinkClick = () => {
    saveUser('guest')
    Router.push('/Todo')
  }

  const onLoginClick = () => {
    saveUser('alepekhin')
    Router.push('/Todo')
  }

  return (
    <div>
      <button onClick={onLoginClick}>Login with Google</button>
      <p />
      <button onClick={onLinkClick}>Continue as guest</button>
    </div>
  )
}
