'use client'
import useStore from '../../store'
import { createTask, updateTask } from '../serverActions/_actions'
import { useTransition } from 'react'

export default function TaskForm() {
  const { editedTask } = useStore()
  const [isPending, startTransition] = useTransition()
  const update = useStore((state) => state.updateEditedTask)
  const reset = useStore((state) => state.resetEditedTask)
  return (
    <>
      <input
        type="text"
        className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
        placeholder="New task ?"
        value={editedTask.title || ''}
        onChange={(e) => update({ ...editedTask, title: e.target.value })}
      />
      <button
        onClick={() => {
          startTransition(async () => {
            if (editedTask.id === 0) {
              await createTask({ title: editedTask.title })
            } else {
              await updateTask({ id: editedTask.id, title: editedTask.title })
            }
            reset()
          })
        }}
        className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 "
      >
        {editedTask.id === 0 ? 'Create' : 'Update'}
      </button>
    </>
  )
}
