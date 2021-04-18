import { shallowMount, createLocalVue } from "@vue/test-utils";
import PodcastPlayer from "./podcast-player";

const localVue = createLocalVue();

describe("PodcastPlayer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PodcastPlayer, {
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
