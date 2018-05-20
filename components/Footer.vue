<template>
    <div id="footer-sec">
        <div class="main-footer">
            <div>
                <h4 @click="toAboutUs">联系我们</h4>
                <p>广告合作&nbsp;&nbsp;&nbsp;&nbsp;zhiboke@foxmail.com</p>
                <p>商务合作&nbsp;&nbsp;&nbsp;&nbsp;zhiboke@foxmail.com</p>
                <p>
                    <router-link :to="{path:'/site/article/general',query:{id:8}}">
                        常见问题解答
                    </router-link>
                </p>
            </div>
            <div class="link">
                <h4>友情链接</h4>
                <ul>
                    <li v-for="(link,index) in interLink">
                        <a :href="link.url">{{link.name}}</a>
                    </li>
                </ul>
            </div>
            <div>
                <!--<img src="http://www.iresearch.tv/wp-content/themes/urionz/static/imgs/zbgc.png"/>-->
            </div>
        </div>
        <footer>
            <div>

            </div>
            <section class="copyright">
                <p>
                    <a href="">广告合作</a>|
                    <a href="">免责声明</a>|
                    <a href="">关于我们</a>
                </p>
                <p>Copyright 直播客 © 2018</p>
            </section>
        </footer>
    </div>
</template>
<script>
    import {interLink} from '../conf/index';
    export default {
        data(){
            return {
                interLink:interLink
            }
        },
        methods:{
            toAboutUs(){
                this.$route.push({
                    path:'',
                    query:''
                })
            }
        }
    }
</script>
<style lang="less">
    #footer-sec{
        width:100%;
        position:absolute;
        bottom:0;
        background-color: #fff;
        border-top:1px solid #EDF5F9;
        -webkit-box-shadow:0px -2px 5px #f4f6f6;
        margin-top:30px;
        .main-footer{
            width:1000px;
            margin:0 auto;
            background:#fff;
            padding-top:50px;
            vertical-align: top;
            >div{
                display:inline-block;
                vertical-align: top;
            }
            .link{
                width:400px;
                margin-left:80px;
                ul{
                    font-size:0;
                    li{
                        display: inline-block;
                        font-size:16px;
                        margin-right:20px;
                    }
                }
            }

        }
        footer{
            width:100%;
            a{

            }
            .copyright{
                text-align: center;
                padding:24px 0;
            }
        }
    }

</style>
