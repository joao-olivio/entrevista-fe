import { shallowMount, createLocalVue } from "@vue/test-utils";
import Episodes from "./Episodes.vue";

const localVue = createLocalVue();

describe("Episodes", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Episodes, {
      localVue,
      propsData: {
        items: JSON.stringify({ all: [{ id: 1 }] })
      }
    });
  });

  it("mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("unmounts properly", () => {
    wrapper.vm.$destroy();
    expect(wrapper.vm._isDestroyed).toBeTruthy();
  });

  it("expects prop to be correctly defined", () => {
    expect(wrapper.vm.items).toBeDefined();
  });

  it("generateDelay - should generate delay time for each card", () => {
    expect(wrapper.vm.generateDelay(2)).toEqual("animation-delay: 0.6s");
  });

  it("getItems - should return items when json", () => {
    expect(wrapper.vm.getItems).toEqual([{ id: 1 }]);
  });

  it("getItems - should return items when object", () => {
    wrapper.setProps({ items: { all: [{ id: 1 }] } });
    expect(wrapper.vm.getItems).toEqual([{ id: 1 }]);
  });
});
