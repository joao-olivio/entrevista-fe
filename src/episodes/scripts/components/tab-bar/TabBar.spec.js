import { shallowMount, createLocalVue } from "@vue/test-utils";
import TabBar from "./TabBar.vue";

const localVue = createLocalVue();

describe("TabBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TabBar, {
      localVue,
      propsData: {
        default: "all"
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
    expect(wrapper.vm.default).toBeDefined();
  });

  it("mounted - should attribute a default value to selected", () => {
    expect(wrapper.vm.selected).toEqual("all");
  });
});
