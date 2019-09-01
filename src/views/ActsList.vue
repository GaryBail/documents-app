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
                    <th> Статус </th>
                    <th> # </th>
                </tr>
                </thead>
                <tbody>
            <tr v-for="act in $store.state.acts">
                <td> {{ act.id }} </td>
                <td> {{ act.date }} </td>
                <td> {{ act.amount }} </td>
                <td> {{ act.status }} </td>
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
        name: "ActsList"
    }
</script>

<style scoped>

</style>