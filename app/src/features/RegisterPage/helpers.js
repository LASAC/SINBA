export const getErrorMessage = (data) => {
  if (data.message) return `${data.message}`
  if (Array.isArray(data)) {
    return data.reduce((acc, cur) => `${acc}\n${cur}`)
  }
  return `${data}`
}
