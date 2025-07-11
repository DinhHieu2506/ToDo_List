import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from "../features/todos/TodosSlice"
import { Segmented } from 'antd'

const FilterButtons = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.todos.filter)

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="mb-3 font-bold text-gray-800">Filter Tasks</div>
      <Segmented
        block
        options={[
          { label: 'All', value: 'all' },
          { label: 'Pending', value: 'pending' },
          { label: 'Completed', value: 'completed' },
        ]}
        value={filter}
        onChange={val => dispatch(setFilter(val))}
      />
    </div>
  )
}

export default FilterButtons
