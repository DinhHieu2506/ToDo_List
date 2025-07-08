import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask } from './todosSlice'
import { Card, Button, Tag, Space } from 'antd'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'

const TodoItem = ({ task }) => {
  const dispatch = useDispatch()

  return (
    
    <Card
      size="small"
      title={
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.title}
        </span>
      }
      extra={
        <Tag color={task.completed ? 'green' : 'blue'}>
          {task.completed ? 'Completed' : 'Pending'}
        </Tag>
      }
      className={`shadow hover:shadow-lg transition-all ${
        task.completed ? 'border-green-400' : 'border-blue-400'
      }`}
    >
      <p className={`mb-2 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
        {task.description || 'No description'}
      </p>
      <div className="flex justify-between items-center">
        <small className="text-gray-400">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </small>
        <Space>
            
          <Button
            type={task.completed ? 'default' : 'primary'}
            onClick={() => dispatch(toggleTask(task.id))}
          >
          
            <CheckOutlined />
          </Button>
          <Button danger onClick={() => dispatch(deleteTask(task.id))}>
            <DeleteOutlined />
          </Button>
        </Space>
      </div>
    </Card>
  )
}

export default TodoItem
