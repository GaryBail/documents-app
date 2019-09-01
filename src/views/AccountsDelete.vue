<template>
    <div>
            <h1 class="contract__delete__title">Удалить счет из списка?</h1>
            <br>
                <div class="delete-button">
                    <div v-on:click="submitDeleteClicked" class="btn btn-success btn-sm"> Подтвердить </div>
                    <div v-on:click="$emit('accounts-form-canceling')" class="btn btn-danger btn-sm" > Отклонить </div>
                </div>
    </div>
</template>

<script>
    export default {
        name: "AccountsDelete",
        props:['id'],
        data: function () {
            return {
                date: null,
                amount: null,
                status: null
            }
        },
        methods: {
            submitDeleteClicked: function () {
                this.$emit('accounts-form-delete', {id: this.id, date: this.date, amount: this.amount, status: this.status})
            },
        }
    }
</script>

<style scoped>

</style>