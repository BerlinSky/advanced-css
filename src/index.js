/* eslint-disable no-console */
import './styles.css'

import { executeCallbackProcess, endCallback } from './callback'
import { usePromise, processWithPromise } from './promise'
import { useAsync, mockRequest } from './async'
import { useGenerator, mockRequest as request } from './generator'

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

const enableGeneratorButton = () => {
  const elem = document.getElementById('generator')
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    useGenerator(request)
  })
}

;(function() {
  enableCallbackButton()
  enablePromiseButton()
  enableAsyncButton()
  enableGeneratorButton()
})()
