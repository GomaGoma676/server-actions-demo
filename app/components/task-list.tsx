import { cookies } from 'next/headers'
import type { Task } from '../../types'
import TaskItem from './task-item'

async function fetchTasks() {
  const token = cookies().get('token')?.value
  const res = await fetch(`${process.env.apiUrl}/tasks`, {
    headers: {
      cookie: `token=${token}`,
    },
    next: { tags: ['tasks'] },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const tasks: Task[] = await res.json()
  return tasks
}

export default async function TaskList() {
  const tasks = await fetchTasks()
  return (
    <div className="p-3">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
    </div>
  )
}
