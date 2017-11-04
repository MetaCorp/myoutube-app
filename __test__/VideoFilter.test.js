import { shallow } from 'vue-test-utils'
import VideoFilter from '@/components/VideoFilter'

const filters = ['Physic', 'Music', 'Development']

describe('VideoFilter component', () => {
  
  it('select value equals value', () => {
    const wrapper = shallow(VideoFilter, {
      propsData: {
        filters,
        value: 'Development'
      }
    })
    const selectWrapper = wrapper.find('.block.appearance-none')
    expect(selectWrapper.element.value).toEqual('Development')
  })

  // TODO Fix changes select test
  // it('changes select value update value', () => {
  //   const wrapper = shallow(VideoFilter, {
  //     propsData: {
  //       filters,
  //       value: 'Development'
  //     }
  //   })
  //   const selectWrapper = wrapper.find('.block.appearance-none')
  //   const optionsWrapper = wrapper.findAll('option')
  //   console.log('optionsWrapper :', optionsWrapper)
  //   optionsWrapper.at(1).trigger('change')
  //   console.log('selectWrapper: ', selectWrapper.element.value)
  //   expect(wrapper.vm.filters).toEqual(filters)
  // })
  
  it('equals filters', () => {
    const wrapper = shallow(VideoFilter, {
      propsData: {
        filters
      }
    })
    expect(wrapper.vm.filters).toEqual(filters)
  })

  it('has the expected html structure', () => {
    const wrapper = shallow(VideoFilter, {
      propsData: {
        filters
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})