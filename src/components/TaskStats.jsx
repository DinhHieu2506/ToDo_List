import React from 'react'
import { useSelector } from 'react-redux'

const TaskStats = () => {
  const { tasks } = useSelector(state => state.todos)

  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const pending = total - completed

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="mb-3 font-bold text-gray-800">Task Statistics </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">{total}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-amber-600">{pending}</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{completed}</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>
      </div>
    </div>
  )
}

export default TaskStats
