package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/cosmonaut/voter/x/voter/types"
)

func createTestCustomMessage(keeper *Keeper, ctx sdk.Context) types.CustomMessage {
	item := types.CustomMessage{
		Creator: "any",
	}
	keeper.SetCustomMessage(ctx, item)
	return item
}

func TestCustomMessageGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	item := createTestCustomMessage(keeper, ctx)
	rst, found := keeper.GetCustomMessage(ctx)
	assert.True(t, found)
	assert.Equal(t, item, rst)
}
func TestCustomMessageRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	createTestCustomMessage(keeper, ctx)
	keeper.RemoveCustomMessage(ctx)
	_, found := keeper.GetCustomMessage(ctx)
	assert.False(t, found)
}
