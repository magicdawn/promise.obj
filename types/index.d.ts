export default function pobj<T>(
  o: T
): Promise<
  {
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]
  }
>
