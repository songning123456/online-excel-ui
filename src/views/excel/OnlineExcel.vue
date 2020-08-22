<template>
    <div class='online-excel'>
        <div id='online-excel-content'></div>
    </div>
</template>

<script>
    import Spreadsheet from 'x-data-spreadsheet';

    export default {
        name: 'OnlineExcel',
        data() {
            return {
                spreadSheet: null,
                options: {}
            };
        },
        mounted() {
            this.spreadSheet = new Spreadsheet('#online-excel-content');
            this.spreadSheet.on('cell-selected', this.cellSelected);
            this.spreadSheet.on('cells-selected', this.cellsSelected);
            this.spreadSheet.on('cell-edited', this.cellEdited);
            this.spreadSheet.loadData({});
        },
        methods: {
            cellSelected(cell, ri, ci) {

            },
            cellsSelected(cell, {sri, sci, eri, eci}) {

            },
            cellEdited(text, ri, ci) {

            }
        }
    };
</script>

<style lang='scss' scoped>
    .online-excel {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
