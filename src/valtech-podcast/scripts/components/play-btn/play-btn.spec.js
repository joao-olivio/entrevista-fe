import { shallowMount, createLocalVue } from "@vue/test-utils";
import PlayBtn from "./play-btn";

const localVue = createLocalVue();

describe("PlayBtn", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PlayBtn, {
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
