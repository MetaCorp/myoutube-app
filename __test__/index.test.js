import { shallow } from 'vue-test-utils'
import Index from '@/pages/index'

const videos = [{ id: 0, title: 'Test' }]
const filters = ['Physic', 'Music']
const currentFilter = 'Music'

describe('Index page', () => {
  
  it('equals videos to [{ id: 0, title: "Test" }]', () => {
    const wrapper = shallow(Index, {
      computedData: {
        videos
      }
    })
    expect(wrapper.vm.videos).toEqual(videos)
  })

  it('equals filters to ["Physic", "Music"]', () => {
    const wrapper = shallow(Index, {
      data: {
        filters
      }
    })
    expect(wrapper.vm.filters).toEqual(filters)
  })

  it('equals currentFilter to "Music"', () => {
    const wrapper = shallow(Index, {
      data: {
        currentFilter
      }
    })
    expect(wrapper.vm.currentFilter).toEqual(currentFilter)
  })
  
  it('has the expected html structure', () => {
    const wrapper = shallow(Index, {
      computedData: {
        videos
      },
      data: {
        filters,
        currentFilter
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})