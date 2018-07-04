<template>
    <left-aside>
        <section class="al-container">
            <p>
                <el-button type="primary" @click="add()">新增封面</el-button>
            </p>
            <el-table
                    :data="tableData"
                    stripe
                    style="width:1000px">
                <el-table-column
                        prop="id"
                        label="id"
                        width="40">
                </el-table-column>
                <el-table-column
                        width="100"
                        label="标题">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.title" @change="updateScreenImg(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        label="封面图片">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.img_url" @change="updateScreenImg(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        label="链接Url">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.link_url" @change="updateScreenImg(scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        width="100"
                        label="当前状态">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.deleted" @change="updateScreenImg(scope.row)"></el-input>
                    </template>
                </el-table-column>
            </el-table>


            <el-dialog tile="新增hot" :visible.sync="dialogTableVisible">
                <el-table
                        :data="newHot"
                        stripe
                        style="width:1000px">
                    <el-table-column
                            width="100"
                            label="标题">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.title" @change="updateScreenImg(scope.row)"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="封面图片">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.img_url" @change="updateScreenImg(scope.row)"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="链接Url">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.link_url" @change="updateScreenImg(scope.row)"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTableVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addSubmit">确 定</el-button>
                </div>
            </el-dialog>
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
                newHot:[{
                    type:'hot'
                }],
                dialogTableVisible:false
            }
        },
        created(){

        },
        mounted() {
            this.getScreenImg();
        },
        methods: {
            async getScreenImg(){
                let {data} = await axios.get('/api/admin/getScreenImg',{
                    params:{
                        admin:true
                    }
                });
                this.tableData = data.data;
                console.log(this.tableData);
            },
            async updateScreenImg(row){
                let {data} = await axios.post('/api/admin/updateScreenImg',{
                    row
                });
            },
            add(){
                this.dialogTableVisible = true;
            },
            async addSubmit(){
                let {data} = await axios.post('/api/admin/addScreenImg',this.newHot[0]);
                if(data.code===200){
                    this.newHot =[{
                        type:'hot'
                    }];
                    this.dialogTableVisible = false;
                    this.getScreenImg();
                }
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
