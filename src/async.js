/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const mockRequest = () => {
  return new Promise((resolve, reject) => {
    const test = true

    if (test) {
      setTimeout(() => {
        resolve('The process ended.')
      }, 2000)
    } else {
      reject('Failed to resolve the issue')
    }
  })
}

async function sendRequest(promise) {
  const response = await promise()
  return response
}

const useAsync = promise => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  sendRequest(promise).then(response => {
    infoLog('Finally: ' + response)
  })
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: blue; font-weight: bold;')
}

export { useAsync, mockRequest }
