package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/cosmonaut/voter/x/voter/types"
)

func TestCustomMessageQuery(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestCustomMessage(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCustomMessageRequest
		response *types.QueryGetCustomMessageResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetCustomMessageRequest{},
			response: &types.QueryGetCustomMessageResponse{CustomMessage: &item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CustomMessage(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}
