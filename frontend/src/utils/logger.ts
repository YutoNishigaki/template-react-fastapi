/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * カスタムロガー関数
 * ログ装飾をしてコンソールに出力する
 * @returns
 */
export const logger = {
  log: (msg: any, ...args: any[]) => {
    console.log(
      '%c[LOG]',
      'padding: 2px 4px; border-radius: 8px; background-color: gray; color: white; font-weight: bold;',
      msg,
      ...args,
    )
  },
  info: (msg: any, ...args: any[]) => {
    console.log(
      '%c[INF]',
      'padding: 2px 4px; border-radius: 8px; background-color: teal; color: white; font-weight: bold;',
      msg,
      ...args,
    )
  },
  warn: (msg: any, ...args: any[]) => {
    console.log(
      '%c[WRN]',
      'padding: 2px 4px; border-radius: 8px; background-color: #CC6600; color: white; font-weight: bold;',
      msg,
      ...args,
    )
  },
  error: (msg: any, ...args: any[]) => {
    console.error(
      '%c[ERR]',
      'padding: 2px 4px; border-radius: 8px; background-color: red; color: white; font-weight: bold;',
      msg,
      ...args,
    )
  },
}
