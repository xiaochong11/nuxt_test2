<template>
    <footer id="footer-sec">
        <div class="main-footer">
            <div>
                <h4 @click="toAboutUs">联系我们</h4>
                <!--<p>广告合作&nbsp;&nbsp;&nbsp;&nbsp;166303307@qq.com</p>-->
                <p>商务合作&nbsp;&nbsp;&nbsp;&nbsp;zhiboke@foxmail.com</p>
                <p>广告合作&nbsp;&nbsp;&nbsp;&nbsp;微信：xiaochong_ha</p>
                <p>
                    <!--<router-link :to="{path:'/site/article/general',query:{id:8}}">-->
                        <!--常见问题解答-->
                    <!--</router-link>-->
                </p>
            </div>
            <div class="link">
                <h4>友情链接</h4>
                <ul>
                    <li v-for="(link,index) in osArr" >
                        <a :href="link.linkUrl"  :title="link.name" target="_blank">
                            <img :src="link.icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.25vv.cn" title="VV手游" target="_blank">
                            <img src="/static/uploads/vv.png" style="border-radius: 3px"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.xingzhijing.com" title="星之境游戏" target="_blank">
                            <img src="/static/uploads/xingzhijing.png" style="border-radius: 3px"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.app7752.com" title="网上赚钱" style="color:#afaaaa;" target="_blank">
                            <span style="line-height:20px;">网上赚钱</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <!--<h4>主播加群</h4>-->
                <!--<p>QQ群号：<span> 633950991</span></p>-->
                <h4>小程序</h4>
                <!--<p>微信搜索:主播热度榜</p>-->
                <p>
                    <img style="width:120px" src="/static/uploads/rcode.jpg"/>
                </p>
                <!--<img src="http://www.iresearch.tv/wp-content/themes/urionz/static/imgs/zbgc.png"/>-->
            </div>
        </div>
        <div class="footer-bottom">
            <div>

            </div>
            <section class="copyright">
                <p>
                    <a href="/site/article/general?article_id=1">免责声明 </a>|
                    <a href="/site/article/general?article_id=2">关于我们</a>
                </p>
                <p>Copyright 直播客 © 2018</p>
            </section>
            <div>
                <!--<script type="text/javascript">-->
                    <!--var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273915397'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1273915397' type='text/javascript'%3E%3C/script%3E"));-->
                <!--</script>-->
                <script src="https://s13.cnzz.com/z_stat.php?id=1273915397&web_id=1273915397" language="JavaScript"></script>
                <script>(function(){
                    var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?d67faceb4668c8fc8fc50f85743ca46b":"https://jspassport.ssl.qhimg.com/11.0.1.js?d67faceb4668c8fc8fc50f85743ca46b";
                    document.write('<script src="' + src + '" id="sozz"><\/script>');
                })();
                </script>
            </div>
        </div>
    </footer>
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
        min-width: 1200px;
        position:absolute;
        bottom:0;
        /*background-color: #fff;*/
        background-color: #222222;
        color:#afaaaa;
        border-top:1px solid #222222;
        -webkit-box-shadow:0px -2px 5px #f4f6f6;
        margin-top:30px;
        .main-footer{
            width:1200px;
            margin:0 auto;
            padding-top:10px;
            vertical-align: top;
            h4{
                color:#fff;
                margin:15px 0;
            }
            >div{
                display:inline-block;
                vertical-align: top;
            }
            .link{
                width:500px;
                margin:0 100px;
                ul{
                    font-size:0;
                    display: flex;
                    flex-wrap: wrap;
                    align-items:flex-end ;
                    li{
                        font-size:16px;
                        margin-right:20px;
                        margin-bottom: 14px;
                        box-sizing: border-box;
                        a{
                            img{
                                width:30px;
                                display: block;
                            }
                        }
                    }
                }
            }

        }
        .footer-bottom{
            width:100%;
            a{

            }
            .copyright{
                text-align: center;
                padding:24px 0;
                a{
                    color:#afaaaa
                }
            }
        }
    }

</style>
