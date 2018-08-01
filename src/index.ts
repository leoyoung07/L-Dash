export default class LDash {

  public static trimStr(str: string) {
    return str.replace(/^\s*|\s*$/gi, '');
  }

  public static typeOf(obj: any) {
    return Object.prototype.toString.call(obj);
  }

  public static isString(obj: any) {
    return LDash.typeOf(obj) === '[object String]';
  }

  public static isNumber(obj: any) {
    return LDash.typeOf(obj) === '[object Number]';
  }

  public static isNull(obj: any) {
    return LDash.typeOf(obj) === '[object Null]';
  }

  public static isBoolean(obj: any) {
    return LDash.typeOf(obj) === '[object Boolean]';
  }

  public static isUndefined(obj: any) {
    return LDash.typeOf(obj) === '[object Undefined]';
  }

  public static isFunction(obj: any) {
    return LDash.typeOf(obj) === '[object Function]';
  }

  public static isObject(obj: any) {
    return LDash.typeOf(obj) === '[object Object]';
  }

  constructor(
    private target: string
  ) {
  }

  public trim() {
    if (LDash.isString(this.target)) {
      return LDash.trimStr(this.target);
    } else {
      return this.target;
    }
  }

}
