import 'url-search-params-polyfill'

const utils = {

  /**
   * Validate if string is an email
   * @param {String} value
   * @returns {boolean}
   */
  isValiedEmail(value) {
    // eslint-disable-next-line
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value)
  },

  /**
   * Validate if string is a valid password (min 8 chars, numbers, letters, or symbols)
   * @param {String} value
   * @returns {boolean}
   */
  isValidPassword(value) {
    // eslint-disable-next-line
    const regex = /^(?=.*?[a-zA-Z])(?=.*?[0-9#?!@$%^&*-]).{8,}$/
    return regex.test(value)
  },

  /**
   * Check if string is empty
   * @param string
   * @returns {boolean}
   */
  isEmptyString(string) {
    return string.replace(/ /g, '').length === 0
  },

  /**
   * Get cookie by name
   * @param {String} name
   * @returns {*}
   */
  getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
  },

  /**
   * Set cookie
   * @param {String} name
   * @param {String} value
   * @param {Number} days
   * @param {String} path
   */
  setCookie(name, value, days = 7, path = '/') {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`
  },

  /**
   * Check if esc key was pressed
   * @param e
   * @returns {boolean}
   */
  isEscKey(e) {
    return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27
  }

}

export default utils
