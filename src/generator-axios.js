/* eslint-disable no-console */
import axios from 'axios'

let counter = 0

const start = () => {
  infoLog('The process started ...')
}

function* getBooks() {
  const url = 'http://localhost:9091/books/'
  const response = yield axios.get(url)
  yield response.status
  yield response.headers
  yield response.config
  yield response.request
  yield response.data
}

const retrieveBooks = () => {
  infoLog('Starting the process ...')

  const result = getBooks()

  start()
  infoLog('Running a long process')

  const response = result.next().value

  response
    .then(res => result.next(res).value)
    .then(status => console.log('Status: ', status))

    .then(res => result.next(res).value)
    .then(headers => console.log('Headers: ', headers))

    .then(res => result.next(res).value)
    .then(config => console.log('Config: ', config))

    .then(res => result.next(res).value)
    .then(request => console.log('Request: ', request))

    .then(res => result.next(res).value)
    .then(books => {
      books.map(book => {
        infoLog(
          `success: Id: ${book.id}, Title: ${book.title}, Category: ${book.category}`
        )
      })
    })
    .catch(err => infoLog(err))
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: purple; font-weight: bold;')
}

export { retrieveBooks }
