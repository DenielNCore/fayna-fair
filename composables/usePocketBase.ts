import PocketBase from 'pocketbase'
import type { TypedPocketBase } from '~/types/pocketbase'

export const usePocketBase = () => {
  const config = useRuntimeConfig()

  const pb = new PocketBase(config.public.pocketbaseUrl) as TypedPocketBase

  return pb
}
