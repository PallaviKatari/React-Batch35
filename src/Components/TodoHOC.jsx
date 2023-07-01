import React from 'react'
import Hoc from './Hoc'
import SearchUsers from './UsersHOC'

//TodoList Component
const TodoList = ({ data }) => {
  let todos = data.map((todo) => {
    return <div key={todo.userId}>{todo.title}</div>
  })
  return <div>{todos}<hr /><SearchUsers /></div>
}
const TodosItems = Hoc(TodoList, 'todos')
export default TodosItems
