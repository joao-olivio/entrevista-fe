import { shallowMount, createLocalVue } from "@vue/test-utils";
import Card from "./Card.vue";

const localVue = createLocalVue();

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: {
        id: 1
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
    expect(wrapper.vm.id).toBeDefined();
    expect(wrapper.vm.title).toBeDefined();
    expect(wrapper.vm.subtitle).toBeDefined();
    expect(wrapper.vm.text).toBeDefined();
    expect(wrapper.vm.hoverText).toBeDefined();
    expect(wrapper.vm.hoverIcon).toBeDefined();
    expect(wrapper.vm.icon).toBeDefined();
    expect(wrapper.vm.img).toBeDefined();
    expect(wrapper.vm.imgAlt).toBeDefined();
    expect(wrapper.vm.buttonAlt).toBeDefined();
  });

  it("should define its hover state properly", () => {
    const card = wrapper.find("article");
    card.trigger("mouseenter");

    expect(wrapper.vm.onHover).toBe(true);
  });

  it("should emit click events properly", () => {
    expect(wrapper.emitted("card-click")).toBeFalsy();
    const card = wrapper.find("article");
    card.trigger("click");

    expect(wrapper.emitted("card-click")).toBeTruthy();

    expect(wrapper.emitted("button-click")).toBeFalsy();
    const button = wrapper.find("button");
    button.trigger("click");

    expect(wrapper.emitted("button-click")).toBeTruthy();
  });
});
