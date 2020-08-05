import { clickextension } from './clickextension'

describe('clickextension', () => {
  it('should trigger a click on the elements supplied', () => {
    const div = document.createElement('div')
    const dummyHTML = `
      <article>
        <a>test</a>
        <p>test</p>
      </article>
    `

    const spy = {
      testFn: () => {},
    }

    spyOn(spy, 'testFn')

    div.innerHTML = dummyHTML
    div.querySelector('a').onclick = spy.testFn

    clickextension.bind(div, { value: 'p' })

    div.querySelector('p').click()

    expect(spy.testFn).toHaveBeenCalled()
    expect(spy.testFn).toHaveBeenCalledTimes(1)

    div.querySelector('p').click()

    expect(spy.testFn).toHaveBeenCalled()
    expect(spy.testFn).toHaveBeenCalledTimes(2)
  })
  it('should warn developers then the element provided is not present in the DOM', () => {
    const div = document.createElement('div')
    const dummyHTML = `
      <article>
        <p>test</p>
      </article>
    `

    const spy = {
      testFn: () => {},
    }

    spyOn(console, 'warn')
    div.innerHTML = dummyHTML
    clickextension.bind(div, { value: 'img' })

    expect(console.warn).toHaveBeenCalled()
  })
})
