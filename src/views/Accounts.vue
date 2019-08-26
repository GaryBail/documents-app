<template>
        <div class="col-sm-12">
            <section class="panel">
                <header class="panel-heading">
                    Hover Table
                    <span class="tools pull-right">
                        <a class="refresh-box fa fa-repeat" href="javascript:;"></a>
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                </header>
                <div class="panel-body">
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
                            <td>
                                <router-link v-bind:to="{name: 'account-form', params: {id: account.id}}">
                                    <div href="#myModal2" data-backdrop="static" data-keyboard="false" data-toggle="modal" class="btn btn-warning btn-sm">Редактировать</div>
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <router-view    v-on:account-form-canceling="$router.push({name:'accounts'})"
                                    v-on:account-form-submitted="accountFormSubmitted"></router-view>
                </div>
            </section>
        </div>
</template>

<script>
    export default {
        name: "Accounts",
        methods: {
            accountFormSubmitted: function () {
                this.$store.commit('updateAccounts', data);
                this.$router.push({name: 'accounts'})
            }
        }
    }
</script>

<style scoped>

</style>