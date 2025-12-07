import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export type TypedPocketBase = PocketBase & {
  collection(idOrName: string): RecordService
}
