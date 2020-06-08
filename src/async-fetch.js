/* eslint-disable no-console */

let counter = 0

const start = () => {
  infoLog('The process started ...')
}

const useAsyncFetch = async () => {
  infoLog('Starting the process ...')

  start()
  infoLog('Running a long process')

  const url = 'http://localhost:9091/books/'
  const response = await fetch(url)
  const books = response.json()

  books.then(books => {
    books.map(book => {
      infoLog(
        `success: Id: ${book.id}, Title: ${book.title}, Category: ${book.category}`
      )
    })
  })
}

const infoLog = message => {
  ++counter
  console.log(`%c ${counter}: ${message}`, 'color: blue; font-weight: bold;')
}

export { useAsyncFetch }
