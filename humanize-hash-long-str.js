/**
 *
 * @param str - input str, no important how long it is
 * @param options
 *   maxLength - max length of output value, default is 250
 *   humanizeHash - use hash of words, not for hex, default true
 */

const { getBase64Hash, getHumanizedHash } = require('./utils/hash')

function humanizeHashLongStr(str, options = {}) {
  const { maxLength = 250, humanizeHash = true, words = 3 } = options
  if (typeof str !== 'string') {
    throw new Error(`Input data is not string`)
  }
  if (str.length <= maxLength) {
    return str
  }
  const hashStr = humanizeHash ? getHumanizedHash(str, words) : getBase64Hash(str)
  return str.slice(0, maxLength - (hashStr.length + 1)) + '_' + hashStr
}

module.exports = {
  humanizeHashLongStr,
}
