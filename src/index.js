/* eslint-disable no-console */
import './styles.css'
import validate from 'validate.js'

import constraints from './form/constraints'

const getFormInfo = () => {
  const f = document.getElementById('infoForm')
  const fv = validate.collectFormValues(f)
  // console.log('form values: ', fv)
  return fv
}

const setValidationErrorMessage = (elemName, message) => {
  const elem = document.querySelector(`p[data-input-name=${elemName}]`)
  console.log('elem:', elem)
  elem.innerHTML = `<span>${message}</span>`
}

// const setValidateErrorMessage = () => {
//   const elem = document.querySelector("p[data-input-name='busName']")
//   console.log('elem:', elem)
//   elem.innerHTML = `<span>New Errror Message!!!</span>`
// }

// const inputNodeList = document
//   .getElementById('infoForm')
//   .querySelectorAll('select, input')

// const readNodeList = nodeList => {
//   for (let i = 0; i < nodeList.length; i++) {
//     const d = readInput(nodeList[i])
//     console.log('d', d)
//   }
// }

// const readInput = elem => {
//   const d = {
//     id: elem.id,
//     currentValue: elem.value,
//     type: elem.type,
//     require: elem.required
//   }

//   return d
// }

function submitApplication(event) {
  event.preventDefault()

  // readNodeList(inputNodeList)
  const formData = getFormInfo()
  const resultObject = validate(formData, constraints)
  console.log('results', resultObject)

  for (const elemName in resultObject) {
    console.log('result', resultObject[elemName])
    const result = resultObject[elemName]
    const message = result[0]
    setValidationErrorMessage(elemName, message)
  }

  // setValidateErrorMessage()

  getFormInfo()
}

// eslint-disable-next-line no-extra-semi
;(function() {
  const button = document.getElementById('apply')
  button.addEventListener('click', submitApplication)
})()
