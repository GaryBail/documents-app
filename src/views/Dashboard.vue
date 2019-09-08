<template>
    <div>
        <div class="wrapper">
            <vc-donut
                    background="white" foreground="grey"
                    :size="200" unit="px" :thickness="30"
                    has-legend legend-placement="top"
                    :sections="contractsStatusSections" :total="100"
                    :start-angle="0"
                    @section-click="contractsStatusSectionsClick">
                <h2> {{ `${Math.round(status)}%` }} </h2>
            </vc-donut>
            <vc-donut
                    background="white" foreground="grey"
                    :size="200" unit="px" :thickness="30"
                    has-legend legend-placement="top"
                    :sections="contractsConditionSections" :total="100"
                    :start-angle="0"
                    @section-click="contractsConditionSectionsClick">
                <h2> {{ `${Math.round(condition)}%` }} </h2>
            </vc-donut>
        </div>
        <h2 class="dashboard-text"> Для отображения доли каждого из параметров нажмите на цветовое поле круговой диаграммы </h2>
    </div>
</template>

<script>

export default {
    name: 'dashboard',
    data() {
        return {
            status: null,
            condition: null
        }
    },
    computed: {
        contractsStatusSections: function () {
            return [
                    {
                        label: 'Неоплаченные договора',
                        value: (this.$store.getters.unpaidContracts.length / this.$store.state.contracts.length) * 100,
                        color: 'red'
                    },
                    {
                        label: 'Оплаченые договора',
                        value: (100 - (this.$store.getters.unpaidContracts.length / this.$store.state.contracts.length) * 100),
                        color: 'green'
                    }
            ]
        },
        contractsConditionSections: function () {
            return [
                {
                    label: 'Не закрытые договора',
                    value: (this.$store.getters.unsignedAct.length / this.$store.state.contracts.length) * 100,
                    color: 'red'
                },
                {
                    label: 'Закрытые договора',
                    value: (100 - (this.$store.getters.unsignedAct.length / this.$store.state.contracts.length) * 100),
                    color: 'green'
                }
            ]
        }
    },
    methods: {
        contractsStatusSectionsClick: function(section) {
                this.status = section.value;
        },
        contractsConditionSectionsClick: function(section) {
                this.condition = section.value;
        },
    }
}
</script>

<style scoped>

    .wrapper {
        display: flex;
        justify-content: center;
    }

    .dashboard-text {
        text-align: center;
        text-shadow: grey 2px 1px;
    }

</style>
