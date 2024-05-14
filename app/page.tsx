import Image from 'next/image'
import type { Todo } from '@/types'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
  async function fetchTodos() {
    const response = await axios.get(`/api/todo`)
    console.log(response)
  }
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
      <div
        className="flex flex-col w-10/12 
      p-4 rounded-md shadow-2xl my-4 bg-gray-900"
      >
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <>
            <div
              className={`${
                idx === 0
                  ? 'rounded-t-md'
                  : todos.length - 1 === idx
                  ? 'rounded-b-md'
                  : ''
              } bg-gray-800 hover:bg-gray-700 shadow-md 
              cursor-pointer flex w-full justify-between
            p-4`}
            >
              <div>{todo.toDoTitle}</div>
              <div>{todo.toDoCategory}</div>
              <div>{todo.toDoCompleted ? 'Completed' : 'Not completed'}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
