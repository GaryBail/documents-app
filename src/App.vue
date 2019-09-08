<template>
  <div id="ui" class="ui">

    <!--header start-->
    <Header></Header>
    <!--header end-->

    <!--sidebar start-->
    <Aside/>
    <!--sidebar end-->

    <!--main content start-->
    <Body/>
    <!--main content end-->

    <!--footer start-->
    <div id="footer" class="ui-footer">
      2017 &copy; Bootkit by ThemeBucket.
    </div>
    <!--footer end-->

  </div>
</template>

<script>
  import Header from './components/header';
  import Body from './components/Body';
  import Aside from './components/Aside';

  export default  {
    name: 'App',
    components: {
      Header,
      Body,
      Aside
    }
  }
</script>

