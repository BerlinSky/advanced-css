/* eslint-disable no-console */
import './styles.css'

import { executeCallbackProcess, endCallback } from './callback'
import { usePromise, processWithPromise } from './promise'
import { useAsync, mockRequest } from './async'

const enableCallbackButton = () => {
  const elem = document.getElementById('callback')
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    executeCallbackProcess(endCallback)
  })
}

const enablePromiseButton = () => {
  const elem = document.getElementById('promise')
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    usePromise(processWithPromise)
  })
}

const enableAsyncButton = () => {
  const elem = document.getElementById('async')
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    useAsync(mockRequest)
  })
}

;(function() {
  enableCallbackButton()
  enablePromiseButton()
  enableAsyncButton()
})()
