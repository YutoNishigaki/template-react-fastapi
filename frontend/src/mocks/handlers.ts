import { HttpResponse, delay, http } from 'msw'
import { tasks } from './data/task'
import { isPostTasksBodyType } from './utils'

// 定数
const DELAY = delay(1000) // 1秒
const DOMAIN = 'http://127.0.0.1:8000'

export const handlers = [
  // タスク一覧
  http.get(`${DOMAIN}/tasks`, async () => {
    await DELAY

    return HttpResponse.json(tasks)
  }),

  // タスク新規登録
  http.post(`${DOMAIN}/tasks`, async ({ request }) => {
    const data = await request.json()
    await DELAY

    if (!isPostTasksBodyType(data)) {
      return HttpResponse.json({ error: 'Validation Error' }, { status: 422 })
    }
    return HttpResponse.json({ title: data.title, id: 0 })
  }),

  // タスク更新
  http.put(`${DOMAIN}/tasks/:id`, async ({ params, request }) => {
    const { id } = params
    const data = await request.json()
    await DELAY

    if (!isPostTasksBodyType(data) || isNaN(Number(id))) {
      return HttpResponse.json({ error: 'Validation Error' }, { status: 422 })
    }
    return HttpResponse.json({ title: data.title, id: Number(id) })
  }),

  // タスク削除
  http.delete(`${DOMAIN}/tasks/:id`, async ({ params }) => {
    const { id } = params
    await DELAY

    if (isNaN(Number(id))) {
      return HttpResponse.json({ error: 'Validation Error' }, { status: 422 })
    }
    return new HttpResponse('string', { status: 200 })
  }),

  // タスク完了更新
  http.put(`${DOMAIN}/tasks/:task_id/done`, async ({ params }) => {
    const { task_id } = params
    await DELAY

    if (isNaN(Number(task_id))) {
      return HttpResponse.json({ error: 'Validation Error' }, { status: 422 })
    }
    return HttpResponse.json({ id: Number(task_id) })
  }),

  // タスク完了取消
  http.delete(`${DOMAIN}/tasks/:task_id/done`, async ({ params }) => {
    const { task_id } = params
    await DELAY

    if (isNaN(Number(task_id))) {
      return HttpResponse.json({ error: 'Validation Error' }, { status: 422 })
    }
    return new HttpResponse('string', { status: 200 })
  }),
]
