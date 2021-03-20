import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home/slice'
import todoReducer from './todo/slice'
import filterReducer from '../components/Filter/slice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
    filter: filterReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>

export const userSelector = (state: RootState) => state.home.user
export const todoSelector = (state: RootState) => state.todo.todos
export const statusSelector = (state: RootState) => state.todo.status
export const filterSelector = (state: RootState) => state.filter.done


