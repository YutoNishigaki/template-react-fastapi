import { describe, expect, test } from 'vitest'
import { envStringToBoolean } from './typeConversion'

describe('env string to boolean test', () => {
  // 真偽値変換のテスト
  test('true to equal true', () => {
    expect(envStringToBoolean('true')).toBe(true)
  })
  test('false to equal false', () => {
    expect(envStringToBoolean('false')).toBe(false)
  })
  test('TRUE to equal true', () => {
    expect(envStringToBoolean('TRUE')).toBe(true)
  })
  test('FALSE to equal false', () => {
    expect(envStringToBoolean('FALSE')).toBe(false)
  })
  test('True to equal true', () => {
    expect(envStringToBoolean('True')).toBe(true)
  })
  test('False to equal false', () => {
    expect(envStringToBoolean('False')).toBe(false)
  })
  // 真偽値以外はErrorを投げる
  test('dummy to throw error', () => {
    expect(() => envStringToBoolean('dummy')).toThrowError('真偽値への変換に無効な値が指定されました: dummy')
  })
  test("'' to throw error", () => {
    expect(() => envStringToBoolean('')).toThrowError('真偽値への変換に無効な値が指定されました: ')
  })
  test('undefined to throw error', () => {
    expect(() => envStringToBoolean()).toThrowError('真偽値への変換に無効な値が指定されました: undefined')
  })
})
