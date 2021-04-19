import { shallowMount, createLocalVue } from "@vue/test-utils";
import Caroucel from "./caroucel";

const localVue = createLocalVue();

describe("Caroucel", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Caroucel, {
      propsData: {
        items: [{ id: 1 }, { id: 2 }]
      },
      slot: {
        default: `<div class="card">Card</div>`
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
});
