import api from './config'
import 'isomorphic-fetch'

const contactForm = {
  submit: (formData) =>
    fetch(api.CONTACTUS, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formData)
    })
  .then(
    response => response.json()
  )
}

export default contactForm
