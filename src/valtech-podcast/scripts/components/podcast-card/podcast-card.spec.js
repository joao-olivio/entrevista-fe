import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import PodcastCard from "./podcast-card";
import PlayerModule from "../../store/player";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("PodcastCard", () => {
  let wrapper;
  let modules;
  let store;
  let state = {
    ...PlayerModule.state()
  };

  beforeEach(() => {
    modules = {
      player: {
        namespace: true,
        state,
        mutations: PlayerModule.mutations,
        actions: {
          playPodcast: jest.fn(),
          stopPodcast: jest.fn()
        }
      }
    };
    store = new Vuex.Store({
      modules
    });
    wrapper = shallowMount(PodcastCard, {
      propsData: {
        id: 4,
        title: "Fake podcast",
        time: 1000 * 60 * 45,
        creatorName: "Fake creator",
        creatorTitle: "Front-end Developer"
      },
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

  it("play podcast on play button click", () => {
    const playBtn = wrapper.find({ ref: 'playBtn' });
    playBtn.trigger('click');
    expect(modules.player.actions.playPodcast).toHaveBeenCalled();
  });

  it("stop podcast on stop button click", () => {
    const playBtn = wrapper.find({ ref: 'playBtn' });
    store.commit('LOAD_PODCAST', { id: 4 });
    playBtn.trigger('click');
    expect(modules.player.actions.stopPodcast).toHaveBeenCalled();
  });
});
