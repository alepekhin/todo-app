import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject,
  makeVar,
} from '@apollo/client'

export const todoId = makeVar<string>('')
export const todoText = makeVar<string>('')
export const todoDone = makeVar<boolean>(false)
export const todoFilter = makeVar<boolean>(false)

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export interface TodoType {
  _id: string
  user: string
  description: string
  done: boolean
}

export const QUERY = gql`
  query todos($user: String!) {
    todos(filters: { user: $user }) {
      _id
      user
      description
      done
    }
  }
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(_id: $id) {
      _id
      user
      description
      done
    }
  }
`

export const ADD_TODO = gql`
  mutation AddTodo($user: String!, $descr: String!) {
    createTodo(payload: { user: $user, description: $descr, done: false }) {
      _id
      user
      description
      done
    }
  }
`

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $descr: String, $done: Boolean) {
    updateTodo(payload: { _id: $id, description: $descr, done: $done }) {
      _id
      user
      description
      done
    }
  }
`

export const saveUser = (user) => {
  localStorage.setItem('user', user)
}
export const getUser = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user')
  } else {
    return null
  }
}
