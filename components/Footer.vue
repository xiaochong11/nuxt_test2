<template>
    <div id="footer-sec">
        <div class="main-footer">
            <div>
                <h4 @click="toAboutUs">联系我们</h4>
                <!--<p>广告合作&nbsp;&nbsp;&nbsp;&nbsp;166303307@qq.com</p>-->
                <p>商务合作&nbsp;&nbsp;&nbsp;&nbsp;zhiboke@foxmail.com</p>
                <p>
                    <!--<router-link :to="{path:'/site/article/general',query:{id:8}}">-->
                        <!--常见问题解答-->
                    <!--</router-link>-->
                </p>
            </div>
            <div class="link">
                <h4>友情链接</h4>
                <ul>
                    <li v-for="(link,index) in osArr">
                        <a :href="link.linkUrl">
                            <img :src="link.icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>主播加群</h4>
                <p>群号：<span> 633950991</span></p>
                <!--<img src="http://www.iresearch.tv/wp-content/themes/urionz/static/imgs/zbgc.png"/>-->
            </div>
        </div>
        <footer>
            <div>

            </div>
            <section class="copyright">
                <p>
                    <a href="/site/article/general?article_id=1">免责声明</a>|
                    <a href="/site/article/general?article_id=2">关于我们</a>
                </p>
                <p>Copyright 直播客 © 2018</p>
            </section>
        </footer>
    </div>
</template>
<script>
    import {osArr} from '../conf/index';
    export default {
        data(){
            return {
                osArr:osArr
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
            width:1200px;
            margin:0 auto;
            background:#fff;
            padding-top:50px;
            vertical-align: top;
            >div{
                display:inline-block;
                vertical-align: top;
            }
            .link{
                width:500px;
                margin:0 100px;
                ul{
                    font-size:0;
                    li{
                        display: inline-block;
                        font-size:16px;
                        margin-right:20px;
                        a{
                            img{
                                width:30px;
                            }
                        }
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
