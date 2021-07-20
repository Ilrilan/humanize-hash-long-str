const { getBase64Hash, getHumanizedHash } = require('./utils/hash')

/**
 *
 * @param str - input str, no important how long it is
 * @param options
 *   maxLength - max length of output value, default is 250
 *   humanizeHash - use hash of words, not for hex, default true
 *   words - count of words in humanized hash
 *   length - count of bytes if not humanized hash
 */
function humanizeHashLongStr(str, options = {}) {
  const { maxLength = 250, humanizeHash = true, words = 3, length = 10 } = options
  if (typeof str !== 'string') {
    throw new Error(`Input data is not string`)
  }
  if (str.length <= maxLength) {
    return str
  }
  const hashStr = humanizeHash ? getHumanizedHash(str, words) : getBase64Hash(str, length)
  return str.slice(0, maxLength - (hashStr.length + 1)) + '_' + hashStr
}

module.exports = {
  humanizeHashLongStr,
}
