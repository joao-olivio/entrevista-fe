import includes from 'lodash/includes'

const injectedUrls = []

export function loaded(binding) {
  const tag = document.createElement('script')
  const head = document.getElementsByTagName('head')[0]

  tag.src = binding.url
  tag.async = true

  if (binding.attributes) {
    Object.keys(binding.attributes).forEach((key) => {
      tag.setAttribute(key, binding.attributes[key])
    })
  }

  head.appendChild(tag)

  tag.onload = () => fireLoadedEvent(binding.name, binding.url)
}

export function fireLoadedEvent(name, url) {
  window.eventBus.$emit('script.loaded', {
    name,
    url,
  })
}

export const loadscript = {
  bind: (el, binding) => {
    if (binding.value && binding.value.url && !includes(injectedUrls, binding.value.url)) {
      injectedUrls.push(binding.value.url)
      loaded(binding.value)
    }
  }
}
