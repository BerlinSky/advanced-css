import validate from 'validate.js'
import constraints from './constraints'

const getFormInfo = () => {
  const f = document.getElementById('infoForm')
  const fv = validate.collectFormValues(f)
  return fv
}

const resetAllValidationErrrorMessages = () => {
  const nodeList = document.querySelectorAll(`p[data-input-name]`)
  for (let i = 0; i < nodeList.length; i++) {
    const elem = nodeList[i]
    elem.innerHTML = ''
  }
}

const setSingleValidationErrorMessage = (elemName, message) => {
  const elem = document.querySelector(`p[data-input-name=${elemName}]`)
  elem.innerHTML = `<span>${message}</span>`
}

const setAllValidationErrorMessage = resultObject => {
  for (const elemName in resultObject) {
    const result = resultObject[elemName]
    const message = result[0]
    setSingleValidationErrorMessage(elemName, message)
  }
}

const validateFormInputs = () => {
  const formData = getFormInfo()
  const resultObject = validate(formData, constraints)

  resetAllValidationErrrorMessages()
  setAllValidationErrorMessage(resultObject)
}

export default validateFormInputs
