<template>
    <div>
        <label>Дата: </label>
            <input type="date" v-model="date" class="form-control">
        <label>Сумма: </label>
            <input type="number" v-model="amount" class="form-control">
        <label> Статус: </label>
            <select type="text" v-model="status" class="form-control">
                <option> не оплачен </option>
                <option> оплачен </option>
            </select>
        <div class="modal-footer">
            <button v-on:click="submitFormClicked" class="btn btn-success">Сохранить</button>
            <button v-on:click="$emit('account-form-canceling')" class="btn btn-default btn-danger">Закрыть</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "account-form",
        props: ['id'],
        data: function () {
            return {
                date: null,
                amount: null,
                status: null
            }
        },
        created: function () {
            this.fillForm()
        },
        methods: {
            fillForm: function () {
                var account = this.$store.state.accounts.find(account => account.id === this.id);
                if (account) {
                    this.date = account.date;
                    this.amount = account.amount;
                    this.status = account.status
                }
            },
            submitFormClicked: function () {
                this.$emit('account-form-submitted', {id: this.id, date: this.date, amount: this.amount, status: this.status})
            }
        }
    }
</script>

<style scoped>

</style>