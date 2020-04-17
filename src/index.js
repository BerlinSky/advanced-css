/* eslint-disable no-console */
import './styles.css'

const inputNodeList = document
  .getElementById('infoForm')
  .querySelectorAll('select, input')

const readNodeList = nodeList => {
  for (let i = 0; i < nodeList.length; i++) {
    const d = readInput(nodeList[i])
    console.log('d', d)
  }
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
}

const button = document.getElementById('apply')
button.addEventListener('click', submitApplication)
