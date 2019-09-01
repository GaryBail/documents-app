<template>
    <div class="wrapper">
        <vc-donut
                background="white" foreground="grey"
                :size="200" unit="px" :thickness="30"
                has-legend legend-placement="top"
                :sections="sections" :total="100"
                :start-angle="0"
                @section-click="handleSectionClick">
            <h1>100%</h1>
        </vc-donut>
        <vc-donut
                background="white" foreground="grey"
                :size="200" unit="px" :thickness="30"
                has-legend legend-placement="top"
                :sections="sections" :total="100"
                :start-angle="0"
                @section-click="handleSectionClick">
            <h1>100%</h1>
        </vc-donut>
    </div>
</template>

<script>

export default {
  name: 'dashboard',
    data() {
        return {
            sections: [
                { label: 'Red section', value: 25, color: 'red' },
                { label: 'Green section', value: 25, color: 'green' },
                { label: 'Blue section', value: 25, color: 'blue' }
            ]
        };
    },
    methods: {
        handleSectionClick(section) {
            console.log(`${section.label} clicked.`);
        }
    }
}
</script>

<style scoped>

    .wrapper {
        display: flex;
        justify-content: center;
    }

</style>
