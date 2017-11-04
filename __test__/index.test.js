import { mount } from 'vue-test-utils'
import Index from '@/pages/index'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})