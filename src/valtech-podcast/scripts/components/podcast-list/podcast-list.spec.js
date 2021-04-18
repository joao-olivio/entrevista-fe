import { shallowMount, createLocalVue } from "@vue/test-utils";
import PodcastList from "./podcast-list";
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe("PodcastList", () => {
  let wrapper;
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      findPodcasts: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
    wrapper = shallowMount(PodcastList, {
      localVue,
      store
    });
  });

  it("mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("unmounts properly", () => {
    wrapper.vm.$destroy();
    expect(wrapper.vm._isDestroyed).toBeTruthy();
  });

  it("run find action on creation", () => {
    expect(actions.findPodcasts).toHaveBeenCalled();
  });

  it("re run find on tab change", () => {
    wrapper.setData({ tab: 1 })
    expect(actions.findPodcasts).toHaveBeenLastCalledWith('development');
  });
});
