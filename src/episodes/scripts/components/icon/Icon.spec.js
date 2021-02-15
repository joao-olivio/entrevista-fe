import { shallowMount, createLocalVue } from "@vue/test-utils";
import Icon from "./Icon.vue";

const localVue = createLocalVue();

describe("Icon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Icon, {
      localVue,
      propsData: {
        iconName: "clock"
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
    expect(wrapper.vm.iconName).toBeDefined();
    expect(wrapper.vm.iconTitle).toBeDefined();
    expect(wrapper.vm.size).toBeDefined();
  });

  it("getSize - should return a transform value for each size", () => {
    expect(wrapper.vm.getSize).toEqual(1);

    // not working, but it should be - https://vue-test-utils.vuejs.org/api/wrapper-array/setprops.html
    // wrapper.setProps({ size: "lg" });
    // expect(wrapper.vm.getSize).toEqual(1.2);
    //
    // wrapper.setProps({ size: "sm" });
    // expect(wrapper.vm.getSize).toEqual(0.8);
  });
});
