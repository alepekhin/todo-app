import Router from 'next/router'
import { user } from '../utils'
import { signOut } from 'next-auth/client'

export const TodoHeader = () => {

  const logoutHandler = () => {
    signOut()
    user('')
    Router.push('/Home')
  }
  
  if (process.browser) {
    if (user()) {
      return (
        <div>
          <h5>User: {user()} <button onClick={logoutHandler} >Logout</button></h5>
          <h1>User's Todo List</h1>
        </div>
      )
    } else {
      Router.push('/Home')
      return null
    }
  } else {
    return <div>user undefined</div>
  }
}
