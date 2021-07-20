Use this package for getting stable unique strings with fixed length.

## Api

```javascript
/**
 *
 * @param str - input str, no important how long it is
 * @param options
 *   maxLength - max length of output value, default is 250
 *   humanizeHash - use hash of words, not for hex, default true
 *   words - count of words in humanized hash
 *   length - count of bytes if not humanized hash
 */
function humanizeHashLongStr(str, options = {}) {}
```

## Examples 

```javascript
const { humanizeHashLongStr } = require('humanize-hash-long-str')

const longStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghjijklmnopqrstuvwxyz'

console.log(humanizeHashLongStr(longStr, { maxLength: 20 }))
```

Will return `ABCD_mango-jazz-papa`, because maximum length is 20 symbols, and humanized hash from full string with 3 words is `mango-jazz-papa`

You can change words count: 

```javascript
console.log(humanizeHashLongStr(longStr, { maxLength: 20, words: 2 }))
```

Will return `ABCDEFG_lamp-sixteen`

Also, you can use non-humanized hash, instead of words this utility will use simple base64 encoding of raw bytes. For example:

```javascript
console.log(humanizeHashLongStr(longStr, { maxLength: 30, humanizeHash: false }))
```

Will return `ABCDEFGHIJKLM_38eJ9+grhaK+cQ==`

You can change bytes length:

```javascript
console.log(humanizeHashLongStr(longStr, { maxLength: 30, humanizeHash: false, length: 5 }))
```

Will return `ABCDEFGHIJKLMNOPQRSTU_kTSZcAE=`
