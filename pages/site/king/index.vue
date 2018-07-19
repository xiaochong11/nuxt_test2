<template>
    <section class="king-page">
        <div class="page">
            <section>
                <h3>王者荣耀巅峰赛排行榜</h3>
                <div class="intro">
                    <p>更新时间：<span>{{getUpdateDate()}}</span> (苹果微信区)</p>
                    <p class="screen" @click="toBulletScreen">我想发弹幕></p>
                </div>

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
            </section>

            <section class="history-sec">
                <h3>王者荣耀s11赛季巅峰赛排行榜</h3>
                <div class="intro">
                    <p>最后更新时间：<span>{{getUpdateDate()}}</span>(苹果微信区)</p>
                </div>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <template slot="title">
                            <p style="text-align:center">查看详细数据</p>
                        </template>
                        <section class="table-sec">
                            <el-table
                                    :data="s11Data"
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
                    </el-collapse-item>
                </el-collapse>
            </section>
        </div>
    </section>
</template>
<script>
    import axios from '~/plugins/axios';
    export default {
        head () {
            return {
                title:'王者荣耀巅峰赛最新排名，巅峰赛实时数据|直播客',
                meta:[
                    { hid: 'keywords', name: 'keywords', content: '王者巅峰赛，王者巅峰赛最新排名，巅峰赛演员，王者巅峰赛最新数据，王者荣耀数据' },
                    { hid: 'description', name: 'description', content: '直播客提供王者巅峰赛最新排名,每日更新巅峰赛数据'}
                ]

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
               s11Data:[
                   {order_id:1,nickname:'李知恩',score:2008,upadte_date:'2018-07-03 23:30:47'},
                   {order_id:2,nickname:'RANK_ONE',score:2005},
                   {order_id:3,nickname:'战旗、张老三',score:1912},
                   {order_id:4,nickname:'Xx.林冲',score:1903},
                   {order_id:5,nickname:'sViper,Long',score:1872},
                   {order_id:6,nickname:'虎牙Tv伊凡',score:1867},
                   {order_id:7,nickname:'未央的小橙子',score:1862},
                   {order_id:8,nickname:'宇晨—心向佛',score:1858},
                   {order_id:9,nickname:'斗鱼不二KKKK',score:1858},
                   {order_id:10,nickname:'虎牙、浪子画',score:1854},
               ]
            }
        },
        methods:{
            getUpdateDate(){
                return new Date(this.tableData[0].update_date).format("yyyy-MM-dd hh:mm:ss");
            },
            toBulletScreen(){
                this.$router.push({
                    path:'/site/bulletScreen'
                })
            }
        }
    }
</script>
<style lang="less">
    .king-page{
        .page{
            width:610px;
            margin:0 auto;
            /*background:#fff;*/
            padding-bottom:50px;
            h3{
                text-align:center;
            }
            .intro{
                display: flex;
                justify-content: space-between;
                .screen{
                    color:#409EFF;
                    font-size:13px;
                    cursor: pointer;
                }
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
            .history-sec{
                margin-top:80px;
            }
            /*.zone{*/
                /*margin-bottom:0;*/
            /*}*/

        }
    }
</style>