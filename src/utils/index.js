/**
 * Retry n times a fetch request
 *
 * @param {Fetch} request
 * @param {number} maxRetry
 * @return {Promise}
 */

export const retryRequest = (request, maxRetry = 3) => (...args) => {
  let retries = 0
  return request(...args).catch(error => {
    if (retries < maxRetry) {
      retries++
      return request(...args)
    } else return Promise.reject(error)
  })
}

/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */
export const isUrl = string => {
  const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/
  return regexp.test(string)
}