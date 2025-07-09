import { createSlice, nanoid } from '@reduxjs/toolkit'

const loadTasks = () => {
  try {
    const data = localStorage.getItem('tasks')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const initialState = {
  tasks: loadTasks(),
  filter: 'all'
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
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
      if (task) {
        task.completed = !task.completed
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  }
})

export const { addTask, toggleTask, deleteTask, setFilter } = todosSlice.actions
export default todosSlice.reducer
