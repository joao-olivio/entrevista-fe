import { shallowMount, createLocalVue } from "@vue/test-utils";
import TabItem from "./TabItem.vue";

const localVue = createLocalVue();

describe("TabItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TabItem, {
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

  it("expects prop to be correctly defined", () => {
    expect(wrapper.vm.selected).toBeDefined();
  });

  it("should emit select tab events on click", () => {
    const link = wrapper.find("a");
    link.trigger("click");

    expect(wrapper.emitted("select-tab")).toBeTruthy();
  });

  it("shoul emit select tab events on enter", () => {
    const link = wrapper.find("a");
    link.trigger("keydown.enter");

    expect(wrapper.emitted("select-tab")).toBeTruthy();
  });
});
