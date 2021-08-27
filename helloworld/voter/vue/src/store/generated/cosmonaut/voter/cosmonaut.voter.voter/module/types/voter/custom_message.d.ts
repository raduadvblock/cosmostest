import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.voter.voter";
export interface CustomMessage {
    creator: string;
    customValue: string;
}
export declare const CustomMessage: {
    encode(message: CustomMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CustomMessage;
    fromJSON(object: any): CustomMessage;
    toJSON(message: CustomMessage): unknown;
    fromPartial(object: DeepPartial<CustomMessage>): CustomMessage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
