<template>
   <router-view     v-on:contract-form-submitted="contractFormSubmitted"
                    v-on:contract-form-canceling="$router.push({name:'contracts'})"
                    v-on:contract-form-delete="contractFormSubmitted"></router-view>
</template>

<script>

    export default {
        name: "Contracts",
        data: function () {
          return {
             editing_contract_id: null
          }
        },
       computed: {
          editingContract: function () {
             if (this.editing_contract_id === null) return;
             return this.contracts.find(function (el) {
                return el.id === this.editing_contract_id
             }.bind(this))
          }
       },
        methods: {
            // loadContracts: function () {
            //     var url = 'https://api.backendless.com/4BE021D6-14C5-9107-FF50-03B57F052900/82E7AA14-D897-E335-FF15-3943DB7DAD00/data/contracts';
            //     this.$http.get(url).then(response => {
            //         this.$store.commit('setContracts', response.body);
            //     }, response => {
            //
            //     });
            // }
            contractFormSubmitted: function (data) {
                if ( this.$route.name === 'edit-contract' ) {
                    this.$store.commit('updateContracts', data)
                } else if ( this.$route.name === 'contract-delete' ) {
                   this.$store.commit('deleteContract', data);
                } else {
                   this.$store.commit('createContract', data);
                }
               this.$router.push({name: 'contracts'})
            },
        }
    }
</script>

<style scoped>

</style>