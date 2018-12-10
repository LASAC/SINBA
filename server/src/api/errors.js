export const NOT_FOUND_ERROR = 'errors/NOT_FOUND_ERROR'
export const CUSTOMER_NOT_FOUND_ERROR = 'errors/CUSTOMER_NOT_FOUND_ERROR'
export const GENRE_NOT_FOUND_ERROR = 'errors/GENRE_NOT_FOUND_ERROR'
export const MOVIE_NOT_FOUND_ERROR = 'errors/MOVIE_NOT_FOUND_ERROR'
export const MOVIE_NOT_IN_STOCK_ERROR = 'errors/MOVIE_NOT_IN_STOCK_ERROR'

const DEFAULT_STATUS = 400

const Statuses = {
  // General Errors
  [NOT_FOUND_ERROR]: 404,

  // Customer Errors
  [CUSTOMER_NOT_FOUND_ERROR]: 404,

  // Genre Errors
  [GENRE_NOT_FOUND_ERROR]: 404,

  // Movie Errors
  [MOVIE_NOT_IN_STOCK_ERROR]: 403,
  [MOVIE_NOT_FOUND_ERROR]: 404
}

const Messages = {
  [NOT_FOUND_ERROR]: 'Not Found',
  [CUSTOMER_NOT_FOUND_ERROR]: 'Customer Not Found',
  [GENRE_NOT_FOUND_ERROR]: 'Genre Not Found',
  [MOVIE_NOT_FOUND_ERROR]: 'Movie Not Found',
  [MOVIE_NOT_IN_STOCK_ERROR]: 'Movie currently not in stock'
}

export const getErrorResponse = (error, defaultStatus = DEFAULT_STATUS) => {
  const { details, message } = error || {}

  if (details && details.length > 0) {
    const response = {
      data: details.map(d => d.message),
      status: defaultStatus
    }
    return response
  }

  const response = {
    status: Statuses[message] || defaultStatus,
    data: Messages[message] || message
  }
  return response
}
