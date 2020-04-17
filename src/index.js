/* eslint-disable no-console */
import './styles.css'

const inputNodeList = document
  .getElementById('infoForm')
  .querySelectorAll('select, input')

console.info('inputNodeList', inputNodeList)

const readNodeList = nodeList => {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = 'darkblue'
  }
}

const test = readNodeList(inputNodeList)

console.log('test', test)

export default readNodeList
