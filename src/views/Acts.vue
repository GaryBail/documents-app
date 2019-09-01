<template>
   <router-view     v-on:act-form-canceling="this.$router.push({name: 'acts'})"
                    v-on:act-form-submitted="actFormSubmitted"
                    v-on:act-form-delete="actFormSubmitted"></router-view>
</template>

<script>
    export default {
        name: "Acts",
        methods: {
            actFormSubmitted: function (data) {
                if ( this.$route.name === 'edit-act' ) {
                    this.$store.commit('updateAct', data);
                } else if ( this.$route.name === 'new-act' ) {
                    this.$store.commit('createAct', data);
                } else {
                    this.$store.commit('deleteAct', data);
                }
                this.$router.push({name: 'acts'})
            }
        }
    }
</script>

<style scoped>

</style>