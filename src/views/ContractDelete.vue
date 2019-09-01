<template>
        <div>
                <h1 class="contract__delete__title">Удалить договор из списка?</h1>
                <br>
                <div class="delete-button">
                    <div v-on:click="submitDeleteClicked" class="btn btn-success btn-sm"> Подтвердить </div>
                    <div v-on:click="$emit('contract-form-canceling')" class="btn btn-danger btn-sm" > Отклонить </div>
                </div>
        </div>
</template>

<script>
    export default {
        name: "ContractDelete",
        props:['id'],
        data: function () {
            return {
                number: null,
                date: null,
                type: null,
                amount: null,
            }
        },
        methods: {
            submitDeleteClicked: function () {
                this.$emit('contract-form-delete', {id: this.id, number: this.number, date: this.date, type: this.type, amount: this.amount})
            },
        }
    }
</script>

<style scoped>


</style>