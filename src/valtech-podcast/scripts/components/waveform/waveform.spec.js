import { shallowMount, createLocalVue } from "@vue/test-utils";
import Waveform from "./waveform";

const localVue = createLocalVue();

describe("Waveform", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Waveform, {
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
