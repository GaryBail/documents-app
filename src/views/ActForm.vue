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
            <select type="text" v-model="condition_id" class="form-control">
                <option v-for="condition in $store.state.conditions" v-bind:value="condition.id"> {{ condition.full_name }} </option>
            </select>
        <div class="modal-footer">
            <button v-on:click="submitFormClicked" class="btn btn-primary"> Сохранить </button>
            <button v-on:click="$emit('act-form-canceling')" class="btn btn-danger"> Закрыть </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Act-form",
        props: ['id'],
        data: function () {
            return {
                date: null,
                amount: null,
                contract_id: null,
                condition_id: null
            }
        },
        created: function () {
            this.fillForm()
        },
        methods: {
            fillForm: function () {
                var act = this.$store.getters.act(this.id);
                if (act) {
                    this.date = act.date;
                    this.amount = act.amount;
                    this.contract_id = act.contract_id;
                    this.condition_id = act.condition_id
                }
            },
            submitFormClicked: function () {
                this.$emit('act-form-submitted', {id: this.id, date: this.date, amount: this.amount, contract_id: this.contract_id, condition_id: this.condition_id})
            }
        }
    }
</script>

<style scoped>

</style>