/* eslint-disable no-console */
import './styles.css'
import validate from 'validate.js'

const constraints = {
  username: {
    presence: true,
    exclusion: {
      within: ['nicklas'],
      message: "'%{value}' is not allowed"
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters'
    }
  }
}

const setValidateErrorMessage = () => {
  const elem = document.querySelector("p[data-input-name='busName']")
  console.log('elem:', elem)
  elem.innerHTML = `<span>New Errror Message!!!</span>`
}

const inputNodeList = document
  .getElementById('infoForm')
  .querySelectorAll('select, input')

const readNodeList = nodeList => {
  for (let i = 0; i < nodeList.length; i++) {
    const d = readInput(nodeList[i])
    console.log('d', d)
  }
}

const getFormInfo = () => {
  const f = document.getElementById('infoForm')
  const fv = validate.collectFormValues(f)
  console.log('form values: ', fv)
}

const readInput = elem => {
  const d = {
    id: elem.id,
    currentValue: elem.value,
    type: elem.type,
    require: elem.required
  }

  return d
}

function submitApplication(event) {
  event.preventDefault()

  readNodeList(inputNodeList)

  const result = validate({ password: 'bad' }, constraints)
  console.log('result', result)

  setValidateErrorMessage()

  getFormInfo()
}

// eslint-disable-next-line no-extra-semi
;(function() {
  const button = document.getElementById('apply')
  button.addEventListener('click', submitApplication)
  console.log('start...')

  setValidateErrorMessage()
})()
