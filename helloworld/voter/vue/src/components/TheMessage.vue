<template>
    <div>
        <h2> The message </h2>
        <b> {{ message }} </b>
    </div>
</template>

<script>
import { countBy } from "lodash";

export default {
    data() {
        return {
            selected: "",
        };
    },
    computed: {
        currentAccount() {
            if (this._depsLoaded) {
                if (this.loggedIn) {
                    return this.$store.getters['common/wallet/address']
                } else {
                    return null
                }
            } else {
                return null
            }
        },
        loggedIn() {
            if (this._depsLoaded) {
                return this.$store.getters['common/wallet/loggedIn']
            } else {
                return false
            }
        },
        message() {
            return (
                this.$store.getters["cosmonaut.voter.voter/getCustomMessage"]({
                    params: {}
                })
            );
        }
    },
    methods: {
        results() {
            const result = this.message();
            return result;
        }
    },
};
</script>
