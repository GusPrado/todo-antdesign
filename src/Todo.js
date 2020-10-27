/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react'
import { Input, List } from 'antd'

import 'antd/dist/antd.css'

import TodoItem from './TodoItem'

const Todo = () => {
  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useState([])

  const handleToDo = (evt) => {
    
    const newTodo = {

      index: new Date().getTime().toString(),
      title: todoTitle,
      date: null,
      dateString: ''
    }
  
    setTodos([...todos, newTodo])
  
    setTodoTitle('')
  }

  const handleRemoveToDo = (index) => {
    const currentToDos = todos.filter(todo => todo.index !== index)

    setTodos(currentToDos)
  }

  const handleDate = (index, date, dateString) => {
    const newToDos = todos.map(item => {
      console.log(item)
      if (item.index === index) {
        const newItem = {
          ...item,
          date,
          dateString
        }
        console.log(newItem)
        return newItem
      }
      
      return item
    })
    console.log(newToDos)
    setTodos(newToDos)
  }

  return (
    <div className="todoContainer">
      <h1>TODO App</h1>

      <Input 
        placeholder="What needs to done?" 
        onPressEnter={handleToDo}  
        value={todoTitle}
        onChange={(evt) => setTodoTitle(evt.target.value)}
      />

      <List 
        locale={{emptyText: 'No ToDo items'}}
        dataSource={todos}
        renderItem={item => (
            <TodoItem 
              todo={item}
              removeTodo={handleRemoveToDo}
              setDate={handleDate}
            />
        )}
      />
    </div>
  )

  
}



export default Todo