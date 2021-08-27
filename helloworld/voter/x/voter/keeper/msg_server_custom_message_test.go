package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/cosmonaut/voter/x/voter/types"
)

func TestCustomMessageMsgServerCreate(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	srv := NewMsgServerImpl(*keeper)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateCustomMessage{Creator: creator}
	_, err := srv.CreateCustomMessage(wctx, expected)
	require.NoError(t, err)
	rst, found := keeper.GetCustomMessage(ctx)
	require.True(t, found)
	assert.Equal(t, expected.Creator, rst.Creator)
}

func TestCustomMessageMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCustomMessage
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCustomMessage{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCustomMessage{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCustomMessage{Creator: creator}
			_, err := srv.CreateCustomMessage(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCustomMessage(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := keeper.GetCustomMessage(ctx)
				require.True(t, found)
				assert.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCustomMessageMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCustomMessage
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCustomMessage{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCustomMessage{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCustomMessage(wctx, &types.MsgCreateCustomMessage{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCustomMessage(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := keeper.GetCustomMessage(ctx)
				require.False(t, found)
			}
		})
	}
}
