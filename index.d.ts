import { ConfigArray } from "typescript-eslint"

declare const base: ConfigArray
declare const jest: ConfigArray
declare const mocha: ConfigArray
declare const withFormatting: ConfigArray

declare const base: ConfigArray
export default base

export const configs = { base, jest, mocha, withFormatting }
