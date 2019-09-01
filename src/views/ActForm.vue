<template>
    <div>
        <label>Дата: </label>
            <input type="date" v-model="date" class="form-control">
        <label>Сумма: </label>
            <input type="number" v-model="amount" class="form-control">
        <label> Статус: </label>
            <select type="text" v-model="status" class="form-control">
                <option> не подписан </option>
                <option> подписан </option>
            </select>
        <div class="modal-footer">
            <button v-on:click="submitFormClicked" class="btn btn-primary"> Сохранить </button>
            <button v-on:click="$emit('act-form-canceling')" class="btn btn-default btn-danger"> Закрыть </button>
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
                status: null
            }
        },
        created: function () {
            this.fillForm()
        },
        methods: {
            fillForm: function () {
                var act = this.$store.state.contracts.find(act => act.id === this.id);
                if (act) {
                    this.date = act.date;
                    this.amount = act.amount;
                    this.status = act.status
                }
            },
            submitFormClicked: function () {
                this.$emit('act-form-submitted', {id: this.id, date: this.date, amount: this.amount, status: this.status})
            }
        }
    }
</script>

<style scoped>

</style>