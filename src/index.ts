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
