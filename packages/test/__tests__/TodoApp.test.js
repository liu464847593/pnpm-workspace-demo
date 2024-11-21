import TodoApp from "../TodoApp.vue";
import {mount} from '@vue/test-utils'
import {test, expect, describe} from 'vitest'

describe('TodoApp', () => {
  test('renders a todo', () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')
  })

  test('create a todo', async () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  test('completes a todo', async () => {
    const wrapper = mount(TodoApp)

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
