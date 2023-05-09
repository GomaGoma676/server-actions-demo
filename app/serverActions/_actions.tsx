'use server'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import type { CreateTask, UpdateTask } from '@/types'

export async function createTask(data: CreateTask) {
  const token = cookies().get('token')?.value
  try {
    await fetch(`${process.env.apiUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        cookie: `token=${token}`,
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error(error)
  }
  revalidateTag('tasks')
}

export async function updateTask(data: UpdateTask) {
  const token = cookies().get('token')?.value
  try {
    await fetch(`${process.env.apiUrl}/tasks/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie: `token=${token}`,
      },
      body: JSON.stringify({ title: data.title }),
    })
  } catch (error) {
    console.error(error)
  }
  revalidateTag('tasks')
}

export async function deleteTask(id: number) {
  const token = cookies().get('token')?.value
  try {
    await fetch(`${process.env.apiUrl}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        cookie: `token=${token}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
  revalidateTag('tasks')
}
