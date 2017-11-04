import { shallow } from 'vue-test-utils'
import VideoList from '@/components/VideoList'

const videos = [{
  id: 0,
  title: 'Test'
}]

describe('VideoList component', () => {
  
  it('equals videos', () => {
    const wrapper = shallow(VideoList, {
      propsData: {
        videos
      }
    })
    expect(wrapper.vm.videos).toEqual(videos)
  })

  it('renders card for each videos', () => {
    const wrapper = shallow(VideoList, {
      propsData: {
        videos
      }
    })
    expect(wrapper.findAll('.flex.flex-wrap > div')).toHaveLength(videos.length)
  })

  it('has the expected html structure', () => {
    const wrapper = shallow(VideoList, {
      propsData: {
        videos
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})