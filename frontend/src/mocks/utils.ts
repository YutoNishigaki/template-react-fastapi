/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PostTasksBodyType } from './types'

// タスクのリクエストボディの型ガード
export function isPostTasksBodyType(arg: any): arg is PostTasksBodyType {
  return arg.title === null || typeof arg.title === 'string'
}
