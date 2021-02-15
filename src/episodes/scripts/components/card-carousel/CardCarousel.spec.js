import { shallowMount, createLocalVue } from "@vue/test-utils";
import CardCarousel from "./CardCarousel.vue";

const localVue = createLocalVue();

describe("CardCarousel", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardCarousel, {
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
