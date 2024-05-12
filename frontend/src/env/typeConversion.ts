/**
 * 真偽値として扱いたい環境変数を受け取り、boolean型に変換して返す
 * @param env
 * @returns
 */
export function envStringToBoolean(env: string = "undefined"): boolean {
  const envLower: string = env.toLowerCase();
  if (envLower === "true" || envLower === "false") {
    return envLower === "true" ? true : false;
  }
  // true/false以外の場合はエラーを投げる
  throw new Error(`真偽値への変換に無効な値が指定されました: ${env}`);
}
