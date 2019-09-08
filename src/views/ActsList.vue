<template>
    <div>
        <div>
            <router-link :to="{name:'new-act', params: {id: $store.state.acts.id}}">
                <button type="button" class="btn btn-success">Добавить</button>
            </router-link>
        </div>
            <table class="table  table-hover general-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th> Дата </th>
                    <th> Сумма </th>
                    <th> Договор </th>
                    <th> Статус </th>
                    <th>  </th>
                </tr>
                </thead>
                <tbody>
            <tr v-for="act in $store.state.acts">
                <td> {{ act.id }} </td>
                <td> {{ act.date }} </td>
                <td> {{ act.amount }} </td>
                <td> {{ contractName(act.contract_id) }} </td>
                <td> {{ actConditions(act.condition_id) }}</td>
                <td>
                    <router-link :to="{name: 'edit-act', params: {id: act.id}}">
                        <div class="btn btn-warning btn-sm">Редактировать</div>
                    </router-link>
                    <router-link :to="{name:'act-delete', params:{id:act.id}}">
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
        name: "ActsList",
        methods: {
            actConditions: function (condition_id) {
                var condition = this.$store.state.conditions.find(el => el.id == condition_id);
                if (condition) {
                    return condition.full_name
                } else {
                    return 'Укажите состояние статуса!'
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