/* eslint-disable no-console */
import './styles.css'

import validateFormInputs from './form/validation'

function submitApplication(event) {
  event.preventDefault()

  validateFormInputs()
}

// eslint-disable-next-line no-extra-semi
;(function() {
  const button = document.getElementById('apply')
  button.addEventListener('click', submitApplication)
})()
