import { loadscript, fireLoadedEvent, loaded } from './load-script'
import Vue from 'vue'

const eventBus = new Vue()
window.eventBus = eventBus

describe('load function', () => {
  it('should create script tag with provided url and attributes argument', () => {
    loaded({
      name: 'olapic',
      url: 'https://photorankstatics-a.akamaihd.net/static/frontend/latest/build.min.js',
      attributes: {
        'data-lang': 'fr_FR',
        'data-olapic': 'olapic_specific_widget',
      }
    })

    expect(document.getElementsByTagName('script')[0].src).toBe('https://photorankstatics-a.akamaihd.net/static/frontend/latest/build.min.js')
    expect(document.getElementsByTagName('script')[0].attributes['data-lang'].value).toBe('fr_FR')
    expect(document.getElementsByTagName('script')[0].attributes['data-olapic'].value).toBe('olapic_specific_widget')
  })
})

describe('fireLoadedEvent', () => {
  let vm
  beforeEach(() => {
    vm = new Vue({
      template: '<div>test</div>',
      data: {
        url: null,
        name: null
      },
      mounted() {
        window.eventBus.$on('script.loaded', (data) => {
          this.url = data.url
          this.name = data.name
        })
      }
    }).$mount()
  })

  it('should emit event and pass data', () => {
    fireLoadedEvent('youtube', 'https://www.youtube.com/player_api')
    expect(vm._data.url).toBe('https://www.youtube.com/player_api')
  })
})

describe('loadscript', () => {
  it('should have a bind function', () => {
    const el = document.createElement('div')
    loadscript.bind(el, { url: 'https://www.youtube.com/player_api', name: 'youtube' })
    expect(typeof loadscript.bind).toBe('function')
  })
})
