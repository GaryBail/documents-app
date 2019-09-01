<template>
        <div>
            <label> Номер контракта: </label>
            <input type="number" v-model="number" class="form-control">
            <label> Дата: </label>
            <input type="date" v-model="date" class="form-control">
            <label> Тип: </label>
            <select type="text" v-model="type" class="form-control">
                <option> оказания услуг </option>
                <option> подряда </option>
            </select>
            <label> Сумма: </label>
            <input type="number" v-model="amount" class="form-control">
            <div class="modal-footer">
                <button v-on:click="submitFormClicked" type="button" class="btn btn-success">Сохранить</button>
                <button v-on:click="$emit('contract-form-canceling')" type="button" class="btn btn-default btn-danger">Закрыть</button>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'contract-form',
        props: ['id'],
        data: function () {
            return {
                number: null,
                date: null,
                type: null,
                amount: null
            }
        },
        created: function () {
            this.fillForm()
        },
        methods: {
            fillForm: function () {
                var contract = this.$store.state.contracts.find(contract => contract.id === this.id);
                if (contract) {
                    this.number = contract.number;
                    this.date = contract.date;
                    this.type = contract.type;
                    this.amount = contract.amount
                }
            },
            submitFormClicked: function () {
                this.$emit('contract-form-submitted', {id: this.id, number: this.number, date: this.date, type: this.type, amount: this.amount})
            }
        }
    }
</script>

<style scoped>



</style>