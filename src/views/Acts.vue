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
                        <th>#</th>
                        <th> Дата </th>
                        <th> Сумма </th>
                        <th> Статус </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="act in $store.state.acts">
                        <td> {{ act.id }} </td>
                        <td> {{ act.data }} </td>
                        <td> {{ act.amount }} </td>
                        <td> {{ act.status }} </td>
                        <td>
                            <router-link v-bind:to="{name: 'act-form', params: {id: act.id}}">
                                <div href="#myModal2" data-backdrop="static" data-keyboard="false" data-toggle="modal" class="btn btn-warning btn-sm">Редактировать</div>
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <router-view    v-on:act-form-canceling="$router.push({name:'acts'})"
                                v-on:act-form-submitted="actFormSubmitted"></router-view>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Acts",
        methods: {
            actFormSubmitted: function () {
                this.$store.commit('updateActs', data);
                this.$router.push({name: 'acts'})
            }
        }
    }
</script>

<style scoped>

</style>