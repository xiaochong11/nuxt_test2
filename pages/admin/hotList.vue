<template>
    <left-aside>
        <section class="al-container">
            <el-table
                    :data="tableData.bannerList"
                    stripe
                    style="width:1000px">
                <el-table-column
                        prop="id"
                        label="id"
                        width="80">
                </el-table-column>
                <el-table-column
                        width="100"
                        label="标题">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.title" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        label="封面图片">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.img_url" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        label="链接Url">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.link_url" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>

                <el-table-column
                        width="100"
                        label="日期">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.date" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        width="100"
                        label="显示序号">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.show_order" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        width="100"
                        label="当前状态">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.deleted" @change="updateIndexData(scope.row)"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <!--<div>-->
            <!--<p>更新日期</p>-->
            <!--<el-input v-model="updateTime" @change="updatePeakTime"></el-input>-->
            <!--</div>-->
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
            }
        },
        created(){

        },
        mounted() {
            this.getIndexData();
        },
        methods: {
            async getIndexData(){
                let {data} = await axios.get('/api/admin/getIndexData',{
                    params:{
                        admin:true
                    }
                });
                this.tableData = data.data;
            },
            async updateIndexData(row){
                let {data} = await axios.post('/api/admin/updateIndexData',{
                    row
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
