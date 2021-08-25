package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCustomMessage{}

func NewMsgCreateCustomMessage(creator string, customValue string) *MsgCreateCustomMessage {
	return &MsgCreateCustomMessage{
		Creator:     creator,
		CustomValue: customValue,
	}
}

func (msg *MsgCreateCustomMessage) Route() string {
	return RouterKey
}

func (msg *MsgCreateCustomMessage) Type() string {
	return "CreateCustomMessage"
}

func (msg *MsgCreateCustomMessage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCustomMessage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCustomMessage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCustomMessage{}

func NewMsgUpdateCustomMessage(creator string, customValue string) *MsgUpdateCustomMessage {
	return &MsgUpdateCustomMessage{
		Creator:     creator,
		CustomValue: customValue,
	}
}

func (msg *MsgUpdateCustomMessage) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCustomMessage) Type() string {
	return "UpdateCustomMessage"
}

func (msg *MsgUpdateCustomMessage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCustomMessage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCustomMessage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCustomMessage{}

func NewMsgDeleteCustomMessage(creator string) *MsgDeleteCustomMessage {
	return &MsgDeleteCustomMessage{
		Creator: creator,
	}
}
func (msg *MsgDeleteCustomMessage) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCustomMessage) Type() string {
	return "DeleteCustomMessage"
}

func (msg *MsgDeleteCustomMessage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCustomMessage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCustomMessage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
