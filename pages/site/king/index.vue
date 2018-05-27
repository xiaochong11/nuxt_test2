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
                Date.prototype.format = function(fmt) {
                    var o = {
                        "M+" : this.getMonth()+1,                 //月份
                        "d+" : this.getDate(),                    //日
                        "h+" : this.getHours(),                   //小时
                        "m+" : this.getMinutes(),                 //分
                        "s+" : this.getSeconds(),                 //秒
                        "q+" : Math.floor((this.getMonth()+3)/3), //季度
                        "S"  : this.getMilliseconds()             //毫秒
                    };
                    if(/(y+)/.test(fmt)) {
                        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
                    }
                    for(var k in o) {
                        if(new RegExp("("+ k +")").test(fmt)){
                            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                        }
                    }
                    return fmt;
                }
                return new Date(this.tableData[0].update_date).format("yyyy-MM-dd hh:mm:ss");
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
            padding-bottom:50px;
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