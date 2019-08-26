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
                        <option v-bind:value="account.id" v-for="account in accounts" value="active"> {{ account.status }} </option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button v-on:click="submitFormClicked" data-dismiss="modal" type="button" class="btn btn-primary">Сохранить изменения</button>
                    <button v-on:click="$emit('account-form-canceling')" data-dismiss="modal" type="button" class="btn btn-default btn-danger">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "account-form",
        props: ['id', 'accounts'],
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