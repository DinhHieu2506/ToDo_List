import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todos/TodosSlice.jsx'
import { Form, Input, Button, message } from 'antd'

const { TextArea } = Input

const AddTodoForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

const handleSubmit = () => {
  const trimmedTitle = title.trim()
  const trimmedDesc = description.trim()

  if (!trimmedTitle) {
    message.warning('Please enter a task title')
    return
  }

  dispatch(addTask({ title: trimmedTitle, description: trimmedDesc }))
  setTitle('')
  setDescription('')
  message.success('Task added successfully!')
}


  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Task Title">
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title..."
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Optional description..."
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          + Add Task
        </Button>
      </Form>
    </div>
  )
}

export default AddTodoForm
