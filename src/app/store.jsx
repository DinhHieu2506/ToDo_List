import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/TodosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})
