/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const mockRequest = () => {
  return new Promise((resolve, reject) => {
    const test = true

    const data = {
      user: { name: 'John Smith', age: 35 },
      system: 'natural'
    }

    if (test) {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    } else {
      reject('Failed to resolve the issue')
    }
  })
}

const sendRequest = async function(promise) {
  const response = await promise()
  return response.user
}

const useAsync = promise => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  sendRequest(promise).then(user => {
    infoLog('User Name: ' + user.name)
    infoLog('User Age: ' + user.age)
  })
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: blue; font-weight: bold;')
}

export { useAsync, mockRequest }
