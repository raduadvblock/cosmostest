<template>
  <div>
    <div class="sp-voter__main sp-box sp-shadow sp-form-group">
        <form class="sp-voter__main__form">
          <div class="sp-voter__main__rcpt__header sp-box-header">
            Create a Message
          </div>

          <input class="sp-input" placeholder="custom message" v-model="custom_message" />
          <sp-button @click="submit">Store Message</sp-button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomMessage",
  data() {
    return {
      custom_message: "",
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
    }
  },
  methods: {
    add() {
      this.custom_message = { custom_message: "" };
    },
    async submit() {
      const value = {
        creator: this.currentAccount,
        custom_message: this.title,
      };
      await this.$store.dispatch("cosmonaut.voter.voter/sendMsgCustomMessage", {
        value,
        fee: [],
      });
    },
  },
};
</script>
