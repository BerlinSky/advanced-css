/* eslint-disable no-console */
import './styles.css'

import { executeCallbackProcess, endCallback } from './callback'

const enableCallbackButton = () => {
  const elem = document.getElementById('callback')
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    executeCallbackProcess(endCallback)
  })
}

;(function() {
  enableCallbackButton()
})()
