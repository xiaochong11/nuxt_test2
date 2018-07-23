<template>
    <header>
        <nav>
            <div class="logo" @click="toIndex">
                <img src="../assets/img/logo.png" alt="弹幕墙"/>
            </div>
            <ul>
                <li @click="toNavUrl(nav)" v-for="(nav,index) in navArr">
                    <span :class="{cur:compute(nav)}">
                        {{nav.name}}
                        <i v-if="nav.hot"></i>
                    </span>
                </li>
            </ul>
            <div class="user">
                <!--<span @click="toLogin">登录</span>-->
                <!--<i class="icon">|</i>-->
                <!--<span>注册</span>-->
            </div>
        </nav>
    </header>
</template>
<script type="text/javascript">
import {navArr} from '../conf/index.js';

export default{
    data(){
        return{
            navArr:navArr,
            curPath:this.$route.path,
        }
    },
    watch:{
        '$route' (to, from) {
            this.curPath = this.$route.path;
        }
    },
    methods:{
        toIndex(){
            this.$router.push({
                path:'/'
            })
        },
        toNavUrl(nav){
            console.log(nav);
            this.$router.push({
                path:nav.path
            })
        },
        toLogin(){
            this.$router.push({
                path:'/user/login'
            })
        },
        compute(nav){
            if(this.curPath.indexOf('liveDir')>-1&&this.$route.query.dir_id ===1){
                console.log(nav.path);
                if(nav.path === '/site/liveDir/dir?dir_id=1&dir_name=王者荣耀'){
                    return true;
                }else{
                    return false;
                }

            }
            return nav.path!=='/'?this.curPath.indexOf(nav.path)>-1:this.curPath===nav.path
        }
    }
}
</script>
<style lang="less">
    header{
        background:#fff;
        border-bottom:2px solid #efefef;
        height:60px;
        line-height:60px;
        box-sizing:border-box;
        position:sticky;
        top:0;
        z-index:1000;
        min-width:1200px;
        nav{
            position: relative;
            width:1200px;
            margin:0 auto;
            font-size:0;
            height:60px;
            .logo{
                display:inline-block;
                vertical-align: top;
                width:150px;
                margin-right:30px;
                cursor:pointer;
                img{
                    width:100%;
                    vertical-align: middle;
                }
            }
            ul{
                font-size:0;
                display:inline-block;
                height:60px;
                padding:0;
                li{
                    display: inline-block;
                    padding:0 10px;
                    font-size:18px;
                    text-align: center;
                    box-sizing:border-box;
                    span{
                        cursor:pointer;
                        padding:0 20px;
                        display: inline-block;
                        height:60px;
                        box-sizing: border-box;
                        &.cur{
                            color:#ff6000;
                            border-bottom:5px solid #ff6000;
                        }
                        &:hover{
                            color:#ff6000;
                        }
                        i{
                            display: inline-block;
                            width: 11px;
                            height: 11px;
                            background: url(https://image.uisdc.com/wp-content/uploads/2013/08/hot.gif) no-repeat left top;
                        }
                    }
                }
            }
            .user{
                position: absolute;
                right:20px;
                top:0;
                font-size:14px;
                span{
                    cursor: pointer;
                    &:hover{
                        color:#3c9cfe
                    }
                }
                .icon{
                    display: inline-block;
                    font-size:16px;
                    margin:0 8px;
                }
            }
        }
    }
</style>
