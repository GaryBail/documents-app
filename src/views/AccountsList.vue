<template>
    <div>
        <div>
            <router-link :to="{name:'new-accounts', params: {id: $store.state.accounts.id}}">
                <button type="button" class="btn btn-success">Добавить</button>
            </router-link>
        </div>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th> # </th>
                        <th> Дата </th>
                        <th> Сумма </th>
                        <th> Статус </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="account in $store.state.accounts">
                        <td> {{ account.id }} </td>
                        <td> {{ account.date }} </td>
                        <td> {{ account.amount }} </td>
                        <td> {{ account.status }} </td>
                        <td> # </td>
                        <td>
                            <router-link v-bind:to="{name: 'edit-accounts', params: {id: account.id}}">
                                <div class="btn btn-warning btn-sm">Редактировать</div>
                            </router-link>
                            <router-link :to="{name:'accounts-delete', params:{id:account.id}}">
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
        name: "AccountsList"
    }
</script>

<style scoped>

</style>