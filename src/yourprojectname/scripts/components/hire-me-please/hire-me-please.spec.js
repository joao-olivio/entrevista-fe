import { shallowMount } from '@vue/test-utils'
import HireMePlease from './hire-me-please'

// const localVue = createLocalVue();

console.log('aqui')

describe('HireMePlease', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallowMount(HireMePlease, {
      attachToDocument: true,
      propsData: {
        apiUrl: '/api/hire/me'
      },
      slots: {
        default: `<button class="btn btn--primary">
                    Hire Me!
                  </button>`
      },
    });
  });

  it('mounts properly', () => {
    expect(wrapper).toBeTruthy();
  })

  it('unmounts properly', () => {
    wrapper.vm.$destroy();
    expect(wrapper.vm._isDestroyed).toBeTruthy();
  });
})
