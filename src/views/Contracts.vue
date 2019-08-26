<template>
    <div class="row">
        <div class="col-sm-12">
            <section class="panel">
                <div class="panel-body">
                    <table class="table  table-hover general-table">
                        <thead>
                        <tr>
                            <th> № </th>
                            <th> Номер договора </th>
                            <th> Дата </th>
                            <th> Тип </th>
                            <th> Сумма </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="contract in $store.state.contracts">
                            <td> {{ contract.id }} </td>
                            <td> {{ contract.number }} </td>
                            <td> {{ contract.date }} </td>
                            <td> {{ contract.type }} </td>
                            <td><span class="label label-info label-mini"> {{ contract.amount }} </span></td>
                            <td>
                                <router-link v-bind:to="{name: 'contract-form', params: {id: contract.id}}">
                                    <div href="#myModal2" data-backdrop="static" data-keyboard="false" data-toggle="modal" class="btn btn-warning btn-sm">Редактировать</div>
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <router-view    v-on:contract-form-canceling="$router.push({name:'contracts'})"
                                    v-on:contract-form-submitted="contractFormSubmitted"></router-view>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contracts",
        methods: {
            contractFormSubmitted: function () {
                this.$store.commit('updateContracts', data);
                this.$router.push({name: 'contracts'})
            }
        }
    }
</script>

<style scoped>

</style>