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
                v-model="adivce">
                </el-input>
            </div>
            <div class="submit-btn">
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
                advice:''
            }

        },
        created(){
            this.getArticle()
        },
        methods:{
            async getArticle(){
                let res = await axios.post('/api/site/advice',this.advice);
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
            .submit-btn{
                button{
                    width:100%;
                }
            }
        }
    }
</style>