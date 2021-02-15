import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageTitle from "./PageTitle.vue";

const localVue = createLocalVue();

describe("PageTitle", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PageTitle, {
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
    expect(wrapper.vm.mainText).toBeDefined();
    expect(wrapper.vm.shadowText).toBeDefined();
    expect(wrapper.vm.noAnimation).toBeDefined();
  });
});
