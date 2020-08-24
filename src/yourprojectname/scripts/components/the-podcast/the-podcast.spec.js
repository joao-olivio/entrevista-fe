import { shallowMount, createLocalVue } from "@vue/test-utils";
import ThePodcast from "./the-podcast";

const localVue = createLocalVue();

describe("ThePodcast", () => {
  let wrapper;
  let mockResponse;

  beforeEach(() => {
    wrapper = shallowMount(ThePodcast, {
      propsData: {
        apiUrl: "/api/hire/me"
      },
      slots: {
        default: `<button class="btn btn--primary">
        Hire Me!
        </button>`
      },
      localVue
    });

    mockResponse = {
      error: false,
      answer: "I believe in you!"
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  it("unmounts properly", () => {
    wrapper.vm.$destroy();
    expect(wrapper.vm._isDestroyed).toBeTruthy();
  });

  it("message is empty", () => {
    expect(wrapper.vm._data.message).toBe("");
  });

  it("message gets dirty on submit", () => {
    wrapper.vm.submit();

    expect(wrapper.vm._data.messageDirty).toBe(true);
  });

  it("should submit on trigger click", () => {
    const submit = jest.fn();
    const button = wrapper.find("button");

    wrapper.setMethods({ submit: submit });

    button.trigger("click");

    expect(wrapper.vm.submit).toHaveBeenCalled();
  });

  it("should not submit without a message filled by the user", () => {
    wrapper.vm.submit();

    expect(wrapper.vm.messageError).toBe(true);
  });

  it("should submit when there's no errors", () => {
    wrapper.setData({
      message: "hi!"
    });

    wrapper.vm.submit();

    expect(wrapper.vm.messageError).toBe(false);
  });

  it("should fetch", () => {
    wrapper.setData({
      message: "hi!"
    });

    wrapper.vm.submit();

    expect(window.fetch).toHaveBeenCalled();
  });
});
