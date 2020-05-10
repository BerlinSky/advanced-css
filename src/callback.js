/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const endCallback = () => {
  infoLog('The process ended ...')
}

const executeCallbackProcess = cb => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  setTimeout(() => {
    cb()
  }, 2000)
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: tomato; font-weight: bold;')
}

export { executeCallbackProcess, endCallback }
