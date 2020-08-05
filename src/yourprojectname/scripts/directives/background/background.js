import debounce from 'lodash/debounce'

export const backgroundDirective = { // eslint-disable-line
  name: 'background',
  bind: (el, binding) => {
    const backgrounds = binding.value

    setBackground(el, backgrounds)

    /* istanbul ignore next */
    window.addEventListener('resize', debounce(() => {
      setBackground(el, backgrounds)
    }, 200))
  },
}

export const getBackground = (backgrounds, windowWidth) => {
  const currentWidth = windowWidth || window.innerWidth
  const keys = Object.keys(backgrounds).reverse()
  const lastMatchingKey = keys.filter(key => currentWidth >= key).shift()
  return backgrounds[lastMatchingKey]
}

export function setBackground(el, backgrounds) {
  const backgroundImage = getBackground(backgrounds)
  const cssProperty = backgroundImage ? `url('${backgroundImage}')` : null

  el.style.backgroundImage = cssProperty
}
