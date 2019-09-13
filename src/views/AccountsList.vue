<template>
    <div>
        <div>
            <router-link :to="{name:'new-accounts', params: {id: $store.state.accounts.id}}">
                <button type="button" class="btn btn-success button-style btn-add">Добавить</button>
            </router-link>
        </div>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th> # </th>
                        <th> Дата </th>
                        <th> Сумма </th>
                        <th> Договор </th>
                        <th> Статус </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="account in $store.state.accounts">
                        <td> {{ account.id }} </td>
                        <td> {{ account.date }} </td>
                        <td> {{ account.amount }} </td>
                        <td> {{ contractName(account.contract_id) }} </td>
                        <td> {{ accountsStatus(account.status_id) }} </td>
                        <td>
                            <router-link v-bind:to="{name: 'edit-accounts', params: {id: account.id}}">
                                <div ripple="ripple" class="btn btn-warning btn-sl button-style">Редактировать</div>
                            </router-link>
                            <router-link :to="{name:'accounts-delete', params:{id:account.id}}">
                                <div ripple="ripple" class="btn btn-danger btn-sl button-style">Удалить</div>
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
    </div>
</template>

<script>
    export default {
        name: "AccountsList",
        methods: {
            accountsStatus: function (status_id) {
                var status = this.$store.state.statuses.find(el => el.id == status_id);
                if (status) {
                    return status.full_name
                } else {
                    return 'Введите статус счета!'
                }
            },
            contractName: function (contract_id) {
                var contract = this.$store.state.contracts.find(el => el.id == contract_id);
                return `Договор №${contract.number} от ${contract.date}`
            }
        }
    }
</script>

<style scoped>

</style>