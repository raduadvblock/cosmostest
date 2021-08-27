import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.voter.voter";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCustomMessage {
    creator: string;
    customValue: string;
}
export interface MsgCreateCustomMessageResponse {
}
export interface MsgUpdateCustomMessage {
    creator: string;
    customValue: string;
}
export interface MsgUpdateCustomMessageResponse {
}
export interface MsgDeleteCustomMessage {
    creator: string;
}
export interface MsgDeleteCustomMessageResponse {
}
export interface MsgCreateVote {
    creator: string;
    pollID: string;
    option: string;
}
export interface MsgCreateVoteResponse {
    id: number;
}
export interface MsgUpdateVote {
    creator: string;
    id: number;
    pollID: string;
    option: string;
}
export interface MsgUpdateVoteResponse {
}
export interface MsgDeleteVote {
    creator: string;
    id: number;
}
export interface MsgDeleteVoteResponse {
}
export interface MsgCreatePoll {
    creator: string;
    title: string;
    options: string[];
}
export interface MsgCreatePollResponse {
    id: number;
}
export interface MsgUpdatePoll {
    creator: string;
    id: number;
    title: string;
    options: string[];
}
export interface MsgUpdatePollResponse {
}
export interface MsgDeletePoll {
    creator: string;
    id: number;
}
export interface MsgDeletePollResponse {
}
export declare const MsgCreateCustomMessage: {
    encode(message: MsgCreateCustomMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCustomMessage;
    fromJSON(object: any): MsgCreateCustomMessage;
    toJSON(message: MsgCreateCustomMessage): unknown;
    fromPartial(object: DeepPartial<MsgCreateCustomMessage>): MsgCreateCustomMessage;
};
export declare const MsgCreateCustomMessageResponse: {
    encode(_: MsgCreateCustomMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCustomMessageResponse;
    fromJSON(_: any): MsgCreateCustomMessageResponse;
    toJSON(_: MsgCreateCustomMessageResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateCustomMessageResponse>): MsgCreateCustomMessageResponse;
};
export declare const MsgUpdateCustomMessage: {
    encode(message: MsgUpdateCustomMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCustomMessage;
    fromJSON(object: any): MsgUpdateCustomMessage;
    toJSON(message: MsgUpdateCustomMessage): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCustomMessage>): MsgUpdateCustomMessage;
};
export declare const MsgUpdateCustomMessageResponse: {
    encode(_: MsgUpdateCustomMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCustomMessageResponse;
    fromJSON(_: any): MsgUpdateCustomMessageResponse;
    toJSON(_: MsgUpdateCustomMessageResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCustomMessageResponse>): MsgUpdateCustomMessageResponse;
};
export declare const MsgDeleteCustomMessage: {
    encode(message: MsgDeleteCustomMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCustomMessage;
    fromJSON(object: any): MsgDeleteCustomMessage;
    toJSON(message: MsgDeleteCustomMessage): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCustomMessage>): MsgDeleteCustomMessage;
};
export declare const MsgDeleteCustomMessageResponse: {
    encode(_: MsgDeleteCustomMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCustomMessageResponse;
    fromJSON(_: any): MsgDeleteCustomMessageResponse;
    toJSON(_: MsgDeleteCustomMessageResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCustomMessageResponse>): MsgDeleteCustomMessageResponse;
};
export declare const MsgCreateVote: {
    encode(message: MsgCreateVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVote;
    fromJSON(object: any): MsgCreateVote;
    toJSON(message: MsgCreateVote): unknown;
    fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote;
};
export declare const MsgCreateVoteResponse: {
    encode(message: MsgCreateVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVoteResponse;
    fromJSON(object: any): MsgCreateVoteResponse;
    toJSON(message: MsgCreateVoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateVoteResponse>): MsgCreateVoteResponse;
};
export declare const MsgUpdateVote: {
    encode(message: MsgUpdateVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateVote;
    fromJSON(object: any): MsgUpdateVote;
    toJSON(message: MsgUpdateVote): unknown;
    fromPartial(object: DeepPartial<MsgUpdateVote>): MsgUpdateVote;
};
export declare const MsgUpdateVoteResponse: {
    encode(_: MsgUpdateVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoteResponse;
    fromJSON(_: any): MsgUpdateVoteResponse;
    toJSON(_: MsgUpdateVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateVoteResponse>): MsgUpdateVoteResponse;
};
export declare const MsgDeleteVote: {
    encode(message: MsgDeleteVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteVote;
    fromJSON(object: any): MsgDeleteVote;
    toJSON(message: MsgDeleteVote): unknown;
    fromPartial(object: DeepPartial<MsgDeleteVote>): MsgDeleteVote;
};
export declare const MsgDeleteVoteResponse: {
    encode(_: MsgDeleteVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoteResponse;
    fromJSON(_: any): MsgDeleteVoteResponse;
    toJSON(_: MsgDeleteVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteVoteResponse>): MsgDeleteVoteResponse;
};
export declare const MsgCreatePoll: {
    encode(message: MsgCreatePoll, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePoll;
    fromJSON(object: any): MsgCreatePoll;
    toJSON(message: MsgCreatePoll): unknown;
    fromPartial(object: DeepPartial<MsgCreatePoll>): MsgCreatePoll;
};
export declare const MsgCreatePollResponse: {
    encode(message: MsgCreatePollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePollResponse;
    fromJSON(object: any): MsgCreatePollResponse;
    toJSON(message: MsgCreatePollResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePollResponse>): MsgCreatePollResponse;
};
export declare const MsgUpdatePoll: {
    encode(message: MsgUpdatePoll, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoll;
    fromJSON(object: any): MsgUpdatePoll;
    toJSON(message: MsgUpdatePoll): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePoll>): MsgUpdatePoll;
};
export declare const MsgUpdatePollResponse: {
    encode(_: MsgUpdatePollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePollResponse;
    fromJSON(_: any): MsgUpdatePollResponse;
    toJSON(_: MsgUpdatePollResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePollResponse>): MsgUpdatePollResponse;
};
export declare const MsgDeletePoll: {
    encode(message: MsgDeletePoll, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePoll;
    fromJSON(object: any): MsgDeletePoll;
    toJSON(message: MsgDeletePoll): unknown;
    fromPartial(object: DeepPartial<MsgDeletePoll>): MsgDeletePoll;
};
export declare const MsgDeletePollResponse: {
    encode(_: MsgDeletePollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePollResponse;
    fromJSON(_: any): MsgDeletePollResponse;
    toJSON(_: MsgDeletePollResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePollResponse>): MsgDeletePollResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCustomMessage(request: MsgCreateCustomMessage): Promise<MsgCreateCustomMessageResponse>;
    UpdateCustomMessage(request: MsgUpdateCustomMessage): Promise<MsgUpdateCustomMessageResponse>;
    DeleteCustomMessage(request: MsgDeleteCustomMessage): Promise<MsgDeleteCustomMessageResponse>;
    CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
    UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
    DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
    CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
    UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse>;
    DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCustomMessage(request: MsgCreateCustomMessage): Promise<MsgCreateCustomMessageResponse>;
    UpdateCustomMessage(request: MsgUpdateCustomMessage): Promise<MsgUpdateCustomMessageResponse>;
    DeleteCustomMessage(request: MsgDeleteCustomMessage): Promise<MsgDeleteCustomMessageResponse>;
    CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
    UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
    DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
    CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
    UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse>;
    DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
