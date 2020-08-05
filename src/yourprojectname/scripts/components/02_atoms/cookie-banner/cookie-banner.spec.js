/* eslint-env jest */
import Vue from 'vue'
import cookieBanner from './cookie-banner.vue'
import { createRenderer } from 'vue-server-renderer'

describe('cookie-banner', () => {
  let SUT
  let vm
  let renderer

  beforeEach(() => {
    SUT = Vue.extend(cookieBanner)
    vm = new SUT({
      propsData: {
        buttonText: 'Dismiss'
      }
    })
    renderer = createRenderer()
  })

  it('should be a component', () => {
    expect(cookieBanner).toBeDefined()

    renderer.renderToString(vm, (err, str) => {
      expect(err).toBeNull()
      expect(str).toMatchSnapshot()
    })
  })

  it('should be open by default', () => {
    expect(vm.showBanner).toBe(true)

    renderer.renderToString(vm, (err, str) => {
      expect(err).toBeNull()
      expect(str).toMatchSnapshot()
    })
  })
})
