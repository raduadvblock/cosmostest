/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.voter.voter'

export interface CustomMessage {
  creator: string
  customValue: string
}

const baseCustomMessage: object = { creator: '', customValue: '' }

export const CustomMessage = {
  encode(message: CustomMessage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.customValue !== '') {
      writer.uint32(18).string(message.customValue)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CustomMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCustomMessage } as CustomMessage
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.customValue = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CustomMessage {
    const message = { ...baseCustomMessage } as CustomMessage
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.customValue !== undefined && object.customValue !== null) {
      message.customValue = String(object.customValue)
    } else {
      message.customValue = ''
    }
    return message
  },

  toJSON(message: CustomMessage): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.customValue !== undefined && (obj.customValue = message.customValue)
    return obj
  },

  fromPartial(object: DeepPartial<CustomMessage>): CustomMessage {
    const message = { ...baseCustomMessage } as CustomMessage
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.customValue !== undefined && object.customValue !== null) {
      message.customValue = object.customValue
    } else {
      message.customValue = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
