/* eslint-disable no-console */
import './styles.css'
import validate from 'validate.js'

import constraints from './form/constraints'

const getFormInfo = () => {
  const f = document.getElementById('infoForm')
  const fv = validate.collectFormValues(f)
  return fv
}

const setSingleValidationErrorMessage = (elemName, message) => {
  const elem = document.querySelector(`p[data-input-name=${elemName}]`)
  elem.innerHTML = `<span>${message}</span>`
}

const setAllValidationErrorMessage = resultObject => {
  for (const elemName in resultObject) {
    console.log('result', resultObject[elemName])
    const result = resultObject[elemName]
    const message = result[0]
    setSingleValidationErrorMessage(elemName, message)
  }
}
const validateFormInputs = () => {
  const formData = getFormInfo()
  const resultObject = validate(formData, constraints)

  setAllValidationErrorMessage(resultObject)
}

function submitApplication(event) {
  event.preventDefault()

  validateFormInputs()
}

// eslint-disable-next-line no-extra-semi
;(function() {
  const button = document.getElementById('apply')
  button.addEventListener('click', submitApplication)
})()
