<template>
    <section class="advice-page">
        <div>
            <p>
                您的建议我们将全力处理:
            </p>
            <div class="advice-content">
                <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入建议内容"
                v-model="advice">
                </el-input>
            </div>
            <div class="adive-contact">
                <el-input placeholder="你的邮箱，处理结果我们回复你" v-model="contact">
                </el-input>
            </div>
            <div class="submit-btn" @click="submit">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
        <section>
            <!--<h2>来自用户的反馈建议</h2>-->
            <ul>
                <li v-for="advice in adviceList">
                    <h3>匿名网友</h3>
                    <p>
                        {{advice.advice_content}}
                    </p>
                </li>

            </ul>
        </section>
    </section>
</template>
<script>
    import axios from '~/plugins/axios'
    export default {
        head () {
            return {
                title:'反馈建议，我们期待你的建议|直播客',
                meta: [
                    { hid: 'keywords', name: 'keywords', content: '反馈建议，我们期待你的建议|直播客' },
                    { hid: 'description', name: 'description', content: '反馈建议，我们期待你的建议|直播客' }
                ]
            }
        },
        data(){
            return{
                advice:'',
                contact:'',
                adviceList:[]
            }

        },
        created(){
            this.getAdviceList();
        },
        methods:{
            async submit(){
                if(!this.advice){
                    return;
                }
                let {data} = await axios.post('/api/site/advice/postAdvice',{
                    advice_content:this.advice,
                    advice_contact:this.contact,
                });
                console.log(data);
                if(data.code===200){
                    bus.$emit('dialogShow','感谢你的反馈，直播客因而更好',()=>{
                        this.advice="";
                        this.contact="";
                        this.getAdviceList();
                    });
                };
            },
            async getAdviceList(){
                let {data} = await axios.get('/api/site/advice/getAdviceList');
                if(data.code===200){
                    this.adviceList = data.data;
                };
            }

        }
    }
</script>
<style lang="less">
    .advice-page{
        width:100%;
        padding:50px 0 30px;
        >div{
            width:500px;
            margin:0 auto;
            .advice-content{
                margin:30px 0;
            }
            .adive-contact{
                margin-bottom:30px;
            }
            .submit-btn{
                button{
                    width:100%;
                }
            }
        }
        section{
            margin-top:80px;
            h2{
                text-align: center;
                font-size: 20px;
            }
            ul{
                width:1200px;
                margin:0 auto;
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
                li{
                    width:280px;
                    background-color: #fff;
                    border-radius:10px;
                    padding:10px;
                    box-sizing: border-box;
                    margin-bottom:30px;
                    h3{
                        color:#4488db;
                        text-align: center;
                    }
                    p{
                        font-size:16px;
                        line-height: 20px;
                        height:60px;
                        overflow:hidden;
                    }
                }
            }
        }

    }
</style>