/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

function* getBooks() {
  const url = 'http://localhost:9091/books/'
  const response = yield fetch(url)
  const books = yield response.json()
  return books
}

const useGeneratorFetch = () => {
  infoLog('Starting the process ...')

  const result = getBooks()

  start()
  infoLog('Running a long process')

  result
    .next()
    .value.then(res => result.next(res).value)
    .then(data => result.next(data).value)

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

export { useGeneratorFetch }
