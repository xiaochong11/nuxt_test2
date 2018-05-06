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
    </section>
</template>
<script>
    import axios from '~/plugins/axios'
    export default {
        data(){
            return{
                advice:'',
                contact:''
            }

        },
        created(){

        },
        methods:{
            async submit(){
                let res = await axios.post('/api/site/advice/postAdvice',{
                    advice_content:this.advice,
                    advice_contact:this.contact,
                });
                if(res.data.data===200){

                };
            }
        }
    }
</script>
<style lang="less">
    .advice-page{
        width:100%;
        padding-top:50px;   
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
    }
</style>