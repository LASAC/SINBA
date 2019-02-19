export const NOT_FOUND_ERROR = 'errors/NOT_FOUND_ERROR'
export const CUSTOMER_NOT_FOUND_ERROR = 'errors/CUSTOMER_NOT_FOUND_ERROR'
export const GENRE_NOT_FOUND_ERROR = 'errors/GENRE_NOT_FOUND_ERROR'
export const MOVIE_NOT_FOUND_ERROR = 'errors/MOVIE_NOT_FOUND_ERROR'
export const MOVIE_NOT_IN_STOCK_ERROR = 'errors/MOVIE_NOT_IN_STOCK_ERROR'

export const BAD_REQUEST = 400
export const FORBIDDEN = 403
export const UNAUTHORIZED = 401

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

const MongoDBErrorCodes = {
  DUPLICATE_KEY: 'E11000'
}

const getMongoErrorMessage = error => {
  const { errmsg } = error
  if (errmsg && errmsg.startsWith(MongoDBErrorCodes.DUPLICATE_KEY)) {
    if (errmsg.includes('email')) {
      return 'This email is already taken!'
    }
    return 'Unknown Duplicate Key'
  }

  return 'Unknown Database Error'
}

export const getErrorResponse = (error, defaultStatus = BAD_REQUEST) => {
  const { details, name } = error || {}
  let { message } = error || {}

  // 'details' is something Joi adds
  // to the error object
  // TODO: maybe use the "isJoin" flag
  // TODO: extract this logic to a specific function
  if (details && details.length > 0) {
    const response = {
      data: details.map(d => d.message),
      status: defaultStatus
    }
    return response
  }

  if (name === 'MongoError') {
    console.log('>>> error:', error)
    console.log('>>> name:', name)
    message = getMongoErrorMessage(error)
  }

  const response = {
    status: Statuses[message] || defaultStatus,
    data: { message: Messages[message] || message }
  }
  return response
}
