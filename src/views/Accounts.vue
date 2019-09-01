<template>
        <router-view    v-on:accounts-form-canceling="$router.push({name:'accounts'})"
                        v-on:account-form-submitted="accountFormSubmitted"
                        v-on:accounts-form-delete="accountFormSubmitted"></router-view>
</template>

<script>
    export default {
            name: "Accounts",
            data: function () {
                    return {
                            editing_accounts_id: null
                    }
            },
            computed: {
                    editingContract: function () {
                            if (this.editing_accounts_id === null) return;
                            return this.accounts.find(function (el) {
                                    return el.id === this.editing_accounts_id
                            }.bind(this))
                    }
            },
            methods: {
            accountFormSubmitted: function (data) {
                if ( this.$route.name === 'edit-accounts') {
                    this.$store.commit('updateAccounts', data);
                } else if ( this.$route.name === 'accounts-delete' ) {
                    this.$store.commit('deleteAccounts', data);
                } else {
                    this.$store.commit('createAccounts', data);
                }
                this.$router.push({name: 'accounts'})
            }
        }
    }
</script>

<style scoped>

</style>