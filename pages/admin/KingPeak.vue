<template>
    <left-aside>
        <section class="al-container">
            <el-table
                    :data="tableData"
                    stripe
                    style="width:500px">
                <el-table-column
                        prop="order_id"
                        label="排名"
                        width="80">
                </el-table-column>
                <el-table-column
                        label="昵称">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.nickname" @change="updatePeakData(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        width="180"
                        label="积分">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.score" @change="postPeakData(scope.row)"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <p>更新日期</p>
                <el-input v-model="updateTime" @change="updatePeakTime"></el-input>
            </div>
        </section>
    </left-aside>
</template>

<script>
    import LeftAside from './Aside.vue';
    import axios from '~/plugins/axios'
    export default {
        components:{
            LeftAside
        },
        data () {
            return {
                tableData:[],
                updateTime:''
            }
        },
        created(){

        },
        mounted() {
            this.getPeakData();
        },
        methods: {
            async getPeakData(){
                let {data} = await axios.get('/api/admin/getPeakData',{

                });
                this.tableData = data.data;
                this.updateTime = this.tableData[0].update_date;
                console.log(this.updateTime);
            },
            async updatePeakData(row){
                console.log(row);
                let {data} = await axios.post('/api/admin/updatePeakData',{
                    row
                });
            },
            async updatePeakTime(){
                let {data} = await axios.post('/api/admin/updatePeakTime',{
                    update_date:this.updateTime
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .al-container {
        padding:30px;
        .quill-editor {
            min-height: 200px;
            max-height: 400px;
            overflow-y: auto;
        }
    }
</style>
