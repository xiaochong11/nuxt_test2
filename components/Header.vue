<template>
    <header>
        <nav>
            <div class="logo">
                <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="直播客"/>
            </div>
            <ul>
                <li @click="toNavUrl(nav)" v-for="(nav,index) in navArr">
                    <span :class="curIndex===index?'cur':''">
                        {{nav.name}}
                        <i v-if="nav.hot"></i>
                    </span>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script type="text/javascript">
import {navArr} from '../conf/index.js';

export default{
    data(){
        return{
            navArr:navArr,
            curIndex:0,
        }
    },
    created(){
        console.log(this.$route);
        if(this.$route.path.indexOf('/article')>=0){
            this.curIndex = 1;
        }
    },
    methods:{
        toNavUrl(nav){
            this.$router.push({
                path:nav.path
            })
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
        nav{
            width:1000px;
            margin:0 auto;
            font-size:0;
            height:60px;
            .logo{
                display:inline-block;
                vertical-align: top;
                width:120px;
                margin-right:100px;
                img{
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
        }
    }
</style>
