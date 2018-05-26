<template>
    <section class="king-page">
        <div class="page">
            <h3>王者荣耀巅峰赛排行榜</h3>
            <p>更新时间：<span>{{getUpdateDate()}}</span></p>
            <section class="table-sec">
                <el-table
                        :data="tableData"
                        stripe
                        style="width:500px">
                    <el-table-column
                            prop="order_id"
                            label="排名"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            label="昵称">
                        <template  slot-scope="scope">
                            <el-tag size="medium">{{ scope.row.nickname }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="score"
                            width="120"
                            label="积分">
                    </el-table-column>
                </el-table>
            </section>
        </div>
    </section>
</template>
<script>
    import axios from '~/plugins/axios';
    export default {
        head () {
            return {
                title:'王者荣耀巅峰赛排行榜,每日更新巅峰赛数据',
//                meta: [
//                    { hid: 'description', name: 'description', content: 'My custom description' }
//                ]
            }
        },
        async asyncData({ query,error}){
            console.log(query);
            let {data} = await axios.get('/api/site/king/getPeakData');
            console.log(data)
            if(data.data){
                return {tableData:data.data};
            }else{
                error({ statusCode: 404, message: '接口错误' })
            }
        },
        data(){
            return{
                tableData:[
                    {
//                        order_id:1,
//                        nickname:'',
//                        score:0
                    }

                ]
            }
        },
        methods:{
            getUpdateDate(){
                return new Date(this.tableData[0].update_date).toLocaleDateString()
            }
        }
    }
</script>
<style lang="less">
    .king-page{
        .page{
            width:560px;
            margin:0 auto;
            /*background:#fff;*/
            h3{
                text-align:center;
            }
            .table-sec{
                background:#fff;
                width:560px;
                margin:0 auto;
                padding:24px;
                border: 1px solid #ebebeb;
                border-radius: 3px;
                transition: .2s;
                .el-table{
                    margin:0 auto;
                }
            }

        }
    }
</style>