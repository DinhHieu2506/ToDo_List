import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  filter: 'all'
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload)
      },
      prepare({ title, description }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            completed: false,
            createdAt: new Date().toISOString()
          }
        }
      }
    },
    toggleTask(state, action) {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) task.completed = !task.completed
      
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  }
})

export const { addTask, toggleTask, deleteTask, setFilter } = todosSlice.actions
export default todosSlice.reducer
