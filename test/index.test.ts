import { describe, expect, it } from 'vitest'
import fs from 'fs';
import { unzipToMemory } from '../src/utils'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

describe('unzip', () => {
  it('should', () => {
    unzipToMemory(fs.readFileSync('test.hwpx'))
    .then((files) => {
      console.log(files)
      expect(1).toEqual(1)
    })
  })
})