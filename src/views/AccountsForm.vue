<template>
    <div>
        <label>Дата: </label>
            <input type="date" v-model="date" class="form-control">
        <label>Сумма: </label>
            <input type="number" v-model="amount" class="form-control">
        <label> Договор: </label>
        <select type="text" v-model="contract_id" class="form-control">
            <option v-for="contract in $store.state.contracts" v-bind:value="contract.id"> {{ `Договор №${contract.number} от ${contract.date}` }} </option>
        </select>
        <label> Статус: </label>
            <select type="text" v-model="status_id" class="form-control">
                <option v-for="status in $store.state.statuses" v-bind:value="status.id"> {{ status.full_name }} </option>
            </select>
        <div class="modal-footer">
            <button v-on:click="submitFormClicked" class="btn btn-success">Сохранить</button>
            <button v-on:click="$emit('account-form-canceling')" class="btn btn-danger">Закрыть</button>
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
                status_id: null,
                contract_id: null
            }
        },
        created: function () {
            this.fillForm()
        },
        methods: {
            fillForm: function () {
                var account = this.$store.getters.accounts(this.id);
                if (account) {
                    this.date = account.date;
                    this.amount = account.amount;
                    this.status_id = account.status_id;
                    this.contract_id = account.contract_id
                }
            },
            submitFormClicked: function () {
                this.$emit('account-form-submitted', {id: this.id, date: this.date, amount: this.amount, contract_id: this.contract_id, status_id: this.status_id})
            }
        }
    }
</script>

<style scoped>

</style>