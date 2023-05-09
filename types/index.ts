export interface Task {
  id: number
  title: string
  created_at: Date
  updated_at: Date
}
export interface Credential {
  email: string
  password: string
}
export interface CreateTask {
  title: string
}
export interface UpdateTask {
  id: number
  title: string
}
