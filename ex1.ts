export class Utils {
  public static findMax(...args: number[]): number {
  const max =   args.reduce(function(pre,cur){
      return (pre > cur? pre: cur);
    })
    return max;
  }

  public static findMin(...args: number[]): number {
    const min = args.reduce(function(pre, cur){
      return (pre<cur? pre: cur);
    })
    return min;
  }

  public static reformatData(x: any): Record<string, any> {
    const format = x.reduce((prev, cur) => ({
      ...prev, 
      [cur.role]: (prev[cur.role] || []).concat({'nickname':cur.name}) 
      }), {})
    return format
  }
}
export default Utils
