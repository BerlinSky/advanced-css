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

function* processRequest(promise) {
  const response = yield promise()
  const user = yield response.user
  return `User, ${user.name}, is ${user.age} of the age.`
}

const useGenerator = request => {
  infoLog('Starting the process ...')

  const result = processRequest(request)

  start()
  infoLog('Running a long process')

  result
    .next()
    .value.then(res => result.next(res).value)
    .then(data => result.next(data).value)
    .then(user => infoLog(user))
    .catch(err => infoLog(err))
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: purple; font-weight: bold;')
}

export { useGenerator, mockRequest }
