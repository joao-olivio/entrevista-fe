import { shallowMount, createLocalVue } from "@vue/test-utils";
import TabBar from "./tab-bar";

const localVue = createLocalVue();

describe("TabBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TabBar, {
      propsData: {
        tabs: ["all", "development"]
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

  it("currentTab is 0", () => {
    expect(wrapper.vm._data.currentTab).toBe(0);
  });

  it("change tab on click", async () => {
    const tabItem = wrapper.findAll("tab-item").at(1);
    tabItem.trigger("click");

    await wrapper.vm.$nextTick();

    expect(wrapper.vm._data.currentTab).toBe(1);
    expect(wrapper.emitted().input).toBeTruthy();
    expect(tabItem.classes()).toContain("active");
  });
});
