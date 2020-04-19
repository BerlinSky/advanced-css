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

const setValidateErrorMessage = () => {
  const elem = document.querySelector("p[data-input-name='busName']")
  console.log('elem:', elem)
  elem.innerHTML = `<span>New Errror Message!!!</span>`
}

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
  const result = validate(formData, constraints)
  console.log('result', result)

  setValidateErrorMessage()

  getFormInfo()
}

// eslint-disable-next-line no-extra-semi
;(function() {
  const button = document.getElementById('apply')
  button.addEventListener('click', submitApplication)
})()
