import Router from 'next/router'
import React from 'react'
import { saveUser } from '../utils'
import { useSession, signIn, signOut } from 'next-auth/client'

const Home = () => {
  const [session, loading] = useSession()

  if (loading) {
    return <>Loading...</>
  }

  if (session) {
    saveUser(session.user.email)
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
