const { humanizeHashLongStr } = require('./humanize-hash-long-str')

const longStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghjijklmnopqrstuvwxyz'

console.log(humanizeHashLongStr(longStr, { maxLength: 30, humanizeHash: false, length: 5 }))
