<template>
    <div>
        <div>
        <router-link :to="{name:'new-contract', params: {id: $store.state.contracts.id}}">
            <button type="button" class="btn btn-success">Добавить</button>
        </router-link>
        </div>
            <table class="table  table-hover general-table">
                <thead>
                <tr>
                    <th> № </th>
                    <th> Номер договора </th>
                    <th> Дата </th>
                    <th> Тип </th>
                    <th> Сумма </th>
                    <th> Кол-во счетов <br> по договору </th>
                    <th> Оплачено <br> по договору </th>
                    <th> Оплачен </th>
                    <th> Закрыт </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="contract in $store.state.contracts">
                    <td> {{ contract.id }} </td>
                    <td> {{ contract.number }} </td>
                    <td> {{ contract.date }} </td>
                    <td> {{ contractStatus(contract.type_id) }} </td>
                    <td><span class="label label-info label-mini"> {{ contract.amount }} </span></td>
                    <td> {{ $store.getters.contractAccounts(contract.id).length }} </td>
                    <td> {{ $store.getters.payedAmount(contract.id) }} </td>
                    <td> {{ $store.getters.statusContract(contract.id) }} </td>
                    <td> {{ $store.getters.conditionContract(contract.id) }} </td>
                    <td>
                        <router-link :to="{name: 'edit-contract', params: {id: contract.id}}">
                            <div class="btn btn-warning btn-sm">Редактировать</div>
                        </router-link>
                        <router-link :to="{name:'contract-delete', params:{id:contract.id}}">
                            <div class="btn btn-danger btn-sm">Удалить</div>
                        </router-link>
                    </td>
                </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    export default {
        name: "ContractsList",
        methods: {
            contractStatus: function (type_id) {
                var type =this.$store.state.types.find(el => el.id == type_id);
                if (type) {
                    return type.full_name
                } else {
                    return 'Введите статус договора!'
                }
            }
        }
    }
</script>

<style scoped>

</style>