declare function pobj<T>(o: T): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>

export = pobj
