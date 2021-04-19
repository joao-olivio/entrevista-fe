const checkScreen = store => () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  store.commit("ON_RESIZE", { width, height });
};

const screenSizePlugin = store => {
  if (window) {
    checkScreen(store)();
    window.addEventListener("resize", checkScreen(store));
  }
};

export default screenSizePlugin;
