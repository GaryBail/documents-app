<template>
    <header id="header" class="ui-header">

        <div class="navbar-header">
            <!--logo start-->
            <router-link to="/" class="navbar-brand">
                <span class="logo"><img src="./../assets/images/logo-dark.png" alt=""/></span>
                <span class="logo-compact"><img src="./../assets/images/logo-icon-dark.png" alt=""/></span>
            </router-link>
            <!--logo end-->
        </div>

        <div class="search-dropdown dropdown pull-right visible-xs">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"></i></button>
            <div class="dropdown-menu">
                <form action="">
                    <input class="form-control" placeholder="Search here..." type="text">
                </form>
            </div>
        </div>

        <div class="navbar-collapse nav-responsive-disabled">


            <!--search start-->
            <form class="search-wrapper">
                <div class="search-box">
                    <input v-model="section" class="search-txt" type="text" placeholder="Type to search">
                    <a v-on:click="searchSection" class="search-btn" href="#">
                        <i class="fa fa-search"></i>
                    </a>
                </div>
            </form>
            <!--search end-->


        </div>

    </header>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                section: null
            }
        },
        methods: {
            searchSection: function () {
                switch (this.section) {
                    case 'Договора':
                    case 'договора':
                    case 'Contracts':
                    case 'contracts':
                        return this.$router.push({name: 'contracts'});
                    case 'Счета':
                    case 'счета':
                    case 'Accounts':
                    case 'accounts':
                        return this.$router.push({name: 'accounts'});
                    case 'Акты':
                    case 'акты':
                    case 'Acts':
                    case 'acts':
                        return this.$router.push({name: 'acts'});
                }
            }
        }
    }
</script>

<style scoped>

</style>