/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { List, DatePicker } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons'

import 'antd/dist/antd.css'

const TodoItem = ({todo, removeTodo, setDate}) => {
  const remove = () => {
    removeTodo(todo.index)
  }

  const handleDateChange = (date, dateString) => {
    setDate(todo.index, date, dateString)
    console.log(date, dateString)
  }
  return (
    <List.Item 
      actions={[
        <DatePicker
          format="DD/MM/YYYY"
          onChange={handleDateChange}
          value={todo.date} 
        />,
        <CloseCircleFilled

           onClick={remove}
        />
      ]}
    >
      {todo.title}
    </List.Item>
  )
}

export default TodoItem