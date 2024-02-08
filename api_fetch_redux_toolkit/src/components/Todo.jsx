import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state)
    console.log(data)
  return (
    <div>Todo</div>
  )
}

export default Todo