import Router from 'next/router'
import React from 'react'
import { user } from '../utils'
import { useSession, signIn } from 'next-auth/client'

const Home = () => {
  const [session, loading] = useSession()

  if (loading) {
    return <>Loading...</>
  }

  if (session) {
    user(session.user.email)
    Router.replace('/Todo')
    return null
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

}

export default Home
