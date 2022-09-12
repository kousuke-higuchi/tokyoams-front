
/**
 * 入力必須の検証処理を作成します。
 * @returns
 */
const required = () => (value) => !!value || '必ず入力してください'

/**
 * v-autocompleteの入力必須検証処理を作成します。
 * @param value v-autocompeteで入力される項目（v-model値）を指定します。
 * @returns 
 */
const objectRequired = (value) => (_) => {
    return !!value || '必ず選択してください'
}

/**
 * 最大文字数の検証処理を作成します。
 * @param maxLength 
 * @returns 
 */
const limitLength = (maxLength:number) => {
    return ((value) => value.length <= maxLength || `${maxLength}文字以内で入力してください`)
}

/**
 * 正規表現によるパターン検証処理を作成します。
 * @param pattern 
 * @param message 
 * @returns 
 */
const regexMatch = (pattern:RegExp, message?:string) => {
    return ( (value) => {
        let val = String(value);
        let msg = message || "入力形式が間違っています" 
        return pattern.test(val) || msg
    })
}

/**
 * min以上、max以下の入力検証を作成します。
 * @param min 最小値
 * @param max 最大値
 * @returns 
 */
const between = (min:number, max:number) => {
    return ((value)=>{
        let numberValue = Number(value)
        return min<=numberValue && numberValue<=max || `${min}～${max}の数値を入力してください`
    })
}

/**
 * 数値の入力検証を作成します。
 * @returns 
 */
const isNumeric = () => {
    return  (value) => {
        let isNum = !isNaN( Number(value) )
        return isNum || '数値を入力してください'
    }
}

/**
 * 整数値の入力検証を作成します。
 * @returns 
 */
const isInteger = () => {
    return  (value) => {   
        let num = Number(value)     
        return Number.isInteger(num) || '整数数値を入力してください'
    }
}

/**
 * 一般的な入力検証を提供します。
 * @returns 
 */
export const useValidation = () => {
    return {
      required,
      limitLength,
      regexMatch,
      between,
      isNumeric,
      isInteger,
      objectRequired
    }
}