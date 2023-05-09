import { Suspense } from 'react'
import Spinner from '../components/spinner'
import LogoutBtn from '../components/logout-btn'
import TaskForm from '../components/task-form'
import TaskList from '../components/task-list'

export default function TodoPage() {
  return (
    <div className="m-10">
      <LogoutBtn />
      <TaskForm />
      <Suspense fallback={<Spinner />}>
        {/* @ts-expect-error Async Server Component */}
        <TaskList />
      </Suspense>
    </div>
  )
}
