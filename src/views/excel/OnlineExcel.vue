<template>
    <div class='online-excel'>
        <div id='online-excel-content'></div>
    </div>
</template>

<script>
    import Spreadsheet from 'x-data-spreadsheet';
    import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

    Spreadsheet.locale('zh-cn', zhCN);

    export default {
        name: 'OnlineExcel',
        data() {
            return {
                spreadSheet: null,
                options: {},
                result: {}
            };
        },
        created() {
            let rows2 = {
                '0': {'cells': {'0': {'text': '水果'}, '1': {'text': '数量'}, '2': {'text': '价格'}}},
                '1': {'cells': {'0': {'text': '苹果'}, '1': {'text': '3'}, '2': {'text': '10.0'}}},
                '2': {'cells': {'0': {'text': '梨'}, '1': {'text': '2'}, '2': {'text': '9.0'}}},
                '3': {'cells': {'0': {'text': '草莓'}, '1': {'text': '2'}, '2': {'text': 'nan'}}}
            };
            this.result = {'rows': rows2};
        },
        mounted() {
            this.spreadSheet = new Spreadsheet('#online-excel-content');
            this.spreadSheet.on('cell-selected', this.cellSelected);
            this.spreadSheet.on('cells-selected', this.cellsSelected);
            this.spreadSheet.on('cell-edited', this.cellEdited);
            this.spreadSheet.loadData(this.result);
        },
        methods: {
            cellSelected(cell, ri, ci) {
            },
            cellsSelected(cell, {sri, sci, eri, eci}) {
            },
            cellEdited(text, ri, ci) {
                this.spreadSheet.change((data) => {
                    debugger;
                });
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
