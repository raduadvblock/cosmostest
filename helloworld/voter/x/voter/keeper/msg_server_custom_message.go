package keeper

import (
	"context"

	"github.com/cosmonaut/voter/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCustomMessage(goCtx context.Context, msg *types.MsgCreateCustomMessage) (*types.MsgCreateCustomMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCustomMessage(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var customMessage = types.CustomMessage{
		Creator:     msg.Creator,
		CustomValue: msg.CustomValue,
	}

	k.SetCustomMessage(
		ctx,
		customMessage,
	)
	return &types.MsgCreateCustomMessageResponse{}, nil
}

func (k msgServer) UpdateCustomMessage(goCtx context.Context, msg *types.MsgUpdateCustomMessage) (*types.MsgUpdateCustomMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomMessage(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var customMessage = types.CustomMessage{
		Creator:     msg.Creator,
		CustomValue: msg.CustomValue,
	}

	k.SetCustomMessage(ctx, customMessage)

	return &types.MsgUpdateCustomMessageResponse{}, nil
}

func (k msgServer) DeleteCustomMessage(goCtx context.Context, msg *types.MsgDeleteCustomMessage) (*types.MsgDeleteCustomMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomMessage(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCustomMessage(ctx)

	return &types.MsgDeleteCustomMessageResponse{}, nil
}
