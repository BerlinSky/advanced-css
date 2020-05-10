/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const processWithPromise = () => {
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

const usePromise = promise => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  promise()
    .then(data => {
      infoLog(`success: ${data}`)
    })
    .catch(error => {
      infoLog('error:', error)
    })
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: green; font-weight: bold;')
}

export { usePromise, processWithPromise }
