<template>
    <div class="row">
        <div class="col-md-6">
              <div class="panel">
                  <header class="panel-heading">
                    Pie Chart
                    <span class="tools pull-right">
                        <a class="refresh-box fa fa-repeat" href="javascript:;"></a>
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                  </header>
                  <div class="panel-body">
                      <div class="chartJS">
                          <canvas id="pie-chart-js" height="250" width="800" ></canvas>
                      </div>
                  </div>
              </div>
        </div>
        <div class="col-md-6">
              <div class="panel">
                    <header class="panel-heading">
                      Donut Chart
                      <span class="tools pull-right">
                          <a class="refresh-box fa fa-repeat" href="javascript:;"></a>
                          <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                          <a class="close-box fa fa-times" href="javascript:;"></a>
                      </span>
                    </header>
                    <div class="panel-body">
                        <div class="chartJS">
                            <canvas id="donut-chart-js" height="250" width="800" ></canvas>
                        </div>
                    </div>
              </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'dashboard'
}
</script>
