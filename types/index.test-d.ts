import {expectType} from 'tsd'
import pobj from './'

expectType<Promise<{a: number; b: string; c: number; d: string}>>(
  pobj({a: Promise.resolve(1), b: Promise.resolve('str'), c: 2, d: 'str-d'})
)

expectType<Promise<{a: number; b: string; c: number; d: string}>>(
  pobj({a: Promise.resolve(1), b: Promise.resolve('str'), c: 2, d: 'str-d'})
)
