<template>
    <aside id="aside" class="ui-aside">
        <ul class="nav" ui-nav>
            <li>
                <router-link to="/"><i class="fa fa-home"></i><span> Dashboard </span></router-link>
                <ul class="nav nav-sub">
                    <router-link to="/" class="nav-sub-header"><a><span>Dashboard</span></a></router-link>
                </ul>
            </li>
            <li>
                <router-link to="/contracts"><i class="fa fa-file-text"></i><span>Contracts</span></router-link>
                <ul class="nav nav-sub">
                    <router-link to="/contracts" class="nav-sub-header"><a href="#"><span>Contracts</span></a></router-link>
                </ul>
            </li>
            <li>
                <router-link to="/accounts"><i class="fa fa-credit-card"></i><span> Accounts </span></router-link>
                <ul class="nav nav-sub">
                    <router-link to="/accounts" class="nav-sub-header"><a href="#"><span>Accounts</span></a></router-link>
                </ul>
            </li>
            <li>
                <router-link to="/acts"><i class="fa fa-list-alt"></i><span> Acts </span></router-link>
                <ul class="nav nav-sub">
                    <router-link to="/acts" class="nav-sub-header"><a href="#"><span>Acts</span></a></router-link>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>