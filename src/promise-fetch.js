/* eslint-disable no-console */
let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const usePromiseFetch = () => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  const url = 'http://localhost:9091/books/'

  fetch(url)
    .then(response => response.json())
    .then(books => {
      books.map(book => {
        infoLog(
          `success: Id: ${book.id}, Title: ${book.title}, Category: ${book.category}`
        )
      })
    })
    .catch(error => {
      infoLog('error:', error)
    })
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: green; font-weight: bold;')
}

export { usePromiseFetch }
