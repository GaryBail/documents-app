<template>
    <div id="myModal2" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title"> Редактирование договора </h4>
                </div>
                <div class="modal-body">
                    <label>Номер контракта: </label>
                    <input type="number" v-model="date" class="form-control">
                    <label>Дата: </label>
                    <input type="number" v-model="amount" class="form-control">
                    <label> Тип: </label>
                    <select type="text" v-model="status" class="form-control">
                        <option v-bind:value="act.id" v-for="act in acts" value="active"> {{ act.status }} </option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button v-on:click="submitFormClicked" data-dismiss="modal" type="button" class="btn btn-primary">Сохранить изменения</button>
                    <button v-on:click="$emit('act-form-canceling')" data-dismiss="modal" type="button" class="btn btn-default btn-danger">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Act-form",
        props: ['id', 'acts'],
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