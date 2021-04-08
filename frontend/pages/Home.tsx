import Router from 'next/router'
import React from 'react'
import { saveUser } from '../utils'

const Home = () => {
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

export default Home