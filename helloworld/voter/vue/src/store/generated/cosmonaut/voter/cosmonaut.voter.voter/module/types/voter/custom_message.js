/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.voter.voter';
const baseCustomMessage = { creator: '', customValue: '' };
export const CustomMessage = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.customValue !== '') {
            writer.uint32(18).string(message.customValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomMessage };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.customValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCustomMessage };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.customValue !== undefined && object.customValue !== null) {
            message.customValue = String(object.customValue);
        }
        else {
            message.customValue = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.customValue !== undefined && (obj.customValue = message.customValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCustomMessage };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.customValue !== undefined && object.customValue !== null) {
            message.customValue = object.customValue;
        }
        else {
            message.customValue = '';
        }
        return message;
    }
};
