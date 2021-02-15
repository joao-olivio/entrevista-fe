import { shallowMount, createLocalVue } from "@vue/test-utils";
import Episodes from "./episodes";

const localVue = createLocalVue();

describe("HireMePlease", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Episodes, {
      localVue
    });
  });

  it("mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Should call function when list item is clicked", () => {
    const submit = jest.fn();
    const button = wrapper.findAll("li").at(3);
    wrapper.setMethods({ filterEpisodes: submit });
    button.trigger("click");
    expect(wrapper.vm.filterEpisodes).toHaveBeenCalled();
  });

  it("list item should be active when function is called", () => {
    const button = wrapper.findAll("li").at(0);
    wrapper.vm.filterEpisodes("development")
    expect(button.attributes("class")).toContain("tab active");
  });

});
