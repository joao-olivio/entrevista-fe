export const clickextension = { // eslint-disable-line
  name: 'click-extension',
  bind: (el, binding) => {
    const element = el
    const clickableElements = binding.value.split(',')
    let link
    if (binding.arg !== undefined) {
      link = element.querySelector(`a.${binding.arg}`)
    } else {
      link = element.querySelector('a')
    }

    clickableElements.forEach((elem) => {
      const currentElements = element.querySelectorAll(elem)
      if (currentElements.length) {
        [].forEach.call(currentElements, currentElement => {
          currentElement.onclick = () => link.click()
        })
      } else {
        console.warn(`Element <${elem}> was provided in clickextention but not present within this component.`)
      }
    })
  }
}
