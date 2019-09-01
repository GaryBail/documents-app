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
                    <th> Счета </th>
                    <th> Сумма счетов </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="contract in $store.state.contracts">
                    <td> {{ contract.id }} </td>
                    <td> {{ contract.number }} </td>
                    <td> {{ contract.date }} </td>
                    <td> {{ contract.type }} </td>
                    <td><span class="label label-info label-mini"> {{ contract.amount }} </span></td>
                    <td> # </td>
                    <td> # </td>
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
        name: "ContractsList"
    }
</script>

<style scoped>

</style>