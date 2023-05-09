'use client'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import { Task } from '../../types'
import { useTransition } from 'react'
import useStore from '../../store'
import { deleteTask } from '../serverActions/_actions'

export default function TaskItem(task: Task) {
  const [isPending, startTransition] = useTransition()
  const updateTask = useStore((state) => state.updateEditedTask)
  return (
    <li className="my-2">
      <span>{task.title}</span>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            updateTask({
              id: task.id,
              title: task.title,
            })
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            startTransition(() => deleteTask(task.id))
          }}
        />
      </div>
    </li>
  )
}
