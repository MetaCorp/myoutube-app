import { shallow } from 'vue-test-utils'
import VideoCard from '@/components/VideoCard'

const video = {
  id: 0,
  title: 'Test'
}

describe('VideoCard component', () => {
  
  it('equals video.title', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    const titleWrapper = wrapper.find('.font-bold.text-xl.mb-2')
    expect(titleWrapper.text()).toEqual(video.title)
  })
  
  it('equals video', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    expect(wrapper.vm.video).toEqual(video)
  })

  it('has the expected html structure', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})