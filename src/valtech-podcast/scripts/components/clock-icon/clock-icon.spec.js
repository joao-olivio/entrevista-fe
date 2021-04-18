import { shallowMount, createLocalVue } from "@vue/test-utils";
import ClockIcon from "./clock-icon";

const localVue = createLocalVue();

describe("ClockIcon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClockIcon, {
      propsData: {
        hours: 1,
        minutes: 45
      },
      localVue
    });
  });

  it("mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("unmounts properly", () => {
    wrapper.vm.$destroy();
    expect(wrapper.vm._isDestroyed).toBeTruthy();
  });
});
