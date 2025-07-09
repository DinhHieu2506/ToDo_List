import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { Empty } from 'antd'

const TodoList = () => {
  const { tasks, filter } = useSelector(state => state.todos)

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed :
    filter === 'pending' ? !task.completed : true
  )

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <Empty description={`No ${filter} tasks`} />
      </div>
    )
  }

  return (
    <div className=" flex flex-col space-y-4">
      {filteredTasks.map(task => <TodoItem key={task.id} task={task} />)}
    </div>
  )
}

export default TodoList
