import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ViewerComponent from '@/component.vue'

describe('Viewer', () => {
  it('component.vue', done => {
    const sourceImages = []
    const base = parseInt((Math.random() * 60), 10) + 10
    for (let i = 0; i < 10; i++) {
      sourceImages.push({
        thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
        source: `https://picsum.photos/id/${base + i}/1440/900`,
      })
    }
    const wrapper = shallowMount(ViewerComponent, {
      propsData: { images: sourceImages },
    })
    wrapper.vm.$nextTick(() => {
      // expect(wrapper.vm.$viewer).to.exist
      expect(wrapper.vm).to.have.property('$viewer')
      done()
    })
  })
})
