<template>
    <div class="admin-login-page">
        <div class="container">
            <el-form ref="form" :model="model" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="originPassword" type="password"></el-input>
                </el-form-item>
                <!--<el-form-item label="验证码" style="line-height:40px;">-->
                    <!--<el-input v-model="model.vcode"  style="width:87px;top:-12px;"></el-input>-->
                    <!--<div style="padding-top:7px;display: inline-block;cursor:pointer" @click="getImg">-->
                        <!--<img :src="imgSrc" />-->
                    <!--</div>-->
                <!--</el-form-item>-->
                <el-form-item>
                    <el-button type="primary" plain style="width:179px" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import CryptoJS from "crypto-js"
    import axios from '~/plugins/axios'
    import {store} from '../../conf/index'
    export default {
        data(){
            return{
                imgSrc:'',
                model:{},
                originPassword:''
            }
        },
        created(){
            this.getImg();
        },
        mounted(){

        },
        methods:{
            getImg(){
//                this.$api.get('/captcha/getImg',{},res=>{
//                    this.imgSrc = res.data.imgSrc;
//                })
            },
            async login(){
                if(!this.model.username){
                    bus.$emit('dialogShow','用户名不能为空');
                    return;
                }
                if(!this.originPassword){
                    bus.$emit('dialogShow','密码不能为空');
                    return;
                }
//                if(!this.model.vcode===''){
//                    bus.$emit('dialogShow','请填写验证码');
//                    return;
//                }
//                this.model.password = CryptoJS.SHA1(this.originPassword).toString();
                this.model.password = this.originPassword;
                let data = await axios.post('/api/admin/login',{
                    admin_name:this.model.username,
                    password:this.model.password
                });
                console.log(data);
                if(data.data.code==='200'){
                    store.setItem(1,'a')
                    this.$router.push({
                        path:'/admin/articleCreate'
                    })
                }else{
                    console.log('登录失败');
                }
            }
        }


    }
</script>
<style lang="less">
    .admin-login-page{
        width:100%;
        height:100vh;
        background:url(../../assets/img/admin_login_bg.jpeg) no-repeat;
        background-size:100% 100%;
        opacity:0.6;
        filter:alpha(opacity=60);
        .container{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            color:#000;
        }
    }
    #__nuxt{
        padding:0
    }
</style>