package keeper

import (
	"github.com/cosmonaut/voter/x/voter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCustomMessage set customMessage in the store
func (k Keeper) SetCustomMessage(ctx sdk.Context, customMessage types.CustomMessage) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomMessageKey))
	b := k.cdc.MustMarshalBinaryBare(&customMessage)
	store.Set([]byte{0}, b)
}

// GetCustomMessage returns customMessage
func (k Keeper) GetCustomMessage(ctx sdk.Context) (val types.CustomMessage, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomMessageKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveCustomMessage removes customMessage from the store
func (k Keeper) RemoveCustomMessage(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomMessageKey))
	store.Delete([]byte{0})
}
