const { humanizeHashLongStr } = require('../humanize-hash-long-str')
const veryLongStr =
  'qqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwww'

describe('Humanized hash', () => {
  it('MaxLength = 250, 3 words', () => {
    expect(humanizeHashLongStr(veryLongStr)).toEqual(
      'qqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwww_skylark-indigo-aim'
    )
  })
  it('MaxLength = 30, 3 words', () => {
    expect(humanizeHashLongStr(veryLongStr, { maxLength: 30 })).toEqual('qqqqwwwwwww_skylark-indigo-aim')
  })
  it('MaxLength = 30, 4 words', () => {
    expect(humanizeHashLongStr(veryLongStr, { maxLength: 30, words: 4 })).toEqual('qqqqw_december-london-lion-low')
  })
})
describe('Not humanized hash', () => {
  it('MaxLength = 250, 3 words', () => {
    expect(humanizeHashLongStr(veryLongStr, { humanizeHash: false })).toEqual(
      'qqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwwwwwwwwwwwwwqqqqwwwwwwwwwwwww_PphG1OQejv4BAg=='
    )
  })
  it('MaxLength = 30', () => {
    expect(humanizeHashLongStr(veryLongStr, { humanizeHash: false, maxLength: 30 })).toEqual(
      'qqqqwwwwwwwww_PphG1OQejv4BAg=='
    )
  })
})
