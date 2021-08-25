// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgUpdateCustomMessage } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";
import { MsgCreateCustomMessage } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgDeleteCustomMessage } from "./types/voter/tx";
const types = [
    ["/cosmonaut.voter.voter.MsgCreateVote", MsgCreateVote],
    ["/cosmonaut.voter.voter.MsgUpdateCustomMessage", MsgUpdateCustomMessage],
    ["/cosmonaut.voter.voter.MsgUpdateVote", MsgUpdateVote],
    ["/cosmonaut.voter.voter.MsgDeletePoll", MsgDeletePoll],
    ["/cosmonaut.voter.voter.MsgDeleteVote", MsgDeleteVote],
    ["/cosmonaut.voter.voter.MsgUpdatePoll", MsgUpdatePoll],
    ["/cosmonaut.voter.voter.MsgCreateCustomMessage", MsgCreateCustomMessage],
    ["/cosmonaut.voter.voter.MsgCreatePoll", MsgCreatePoll],
    ["/cosmonaut.voter.voter.MsgDeleteCustomMessage", MsgDeleteCustomMessage],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgCreateVote", value: data }),
        msgUpdateCustomMessage: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgUpdateCustomMessage", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgUpdateVote", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgDeletePoll", value: data }),
        msgDeleteVote: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgDeleteVote", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgUpdatePoll", value: data }),
        msgCreateCustomMessage: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgCreateCustomMessage", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgCreatePoll", value: data }),
        msgDeleteCustomMessage: (data) => ({ typeUrl: "/cosmonaut.voter.voter.MsgDeleteCustomMessage", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
