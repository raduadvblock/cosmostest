import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCustomMessage } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";
import { MsgDeleteCustomMessage } from "./types/voter/tx";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgUpdateCustomMessage } from "./types/voter/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateCustomMessage: (data: MsgCreateCustomMessage) => EncodeObject;
    msgCreatePoll: (data: MsgCreatePoll) => EncodeObject;
    msgUpdatePoll: (data: MsgUpdatePoll) => EncodeObject;
    msgDeleteCustomMessage: (data: MsgDeleteCustomMessage) => EncodeObject;
    msgDeletePoll: (data: MsgDeletePoll) => EncodeObject;
    msgCreateVote: (data: MsgCreateVote) => EncodeObject;
    msgUpdateVote: (data: MsgUpdateVote) => EncodeObject;
    msgDeleteVote: (data: MsgDeleteVote) => EncodeObject;
    msgUpdateCustomMessage: (data: MsgUpdateCustomMessage) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
