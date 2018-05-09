<template>
    <div id="footer-sec">
        <div class="main-footer">
            <div>
                <h4 @click="toAboutUs">联系我们</h4>
                <p>投稿邮箱&nbsp;&nbsp;&nbsp;&nbsp;166303307@foxmail.com</p>
                <p>商务合作&nbsp;&nbsp;&nbsp;&nbsp;zhiboke@foxmail.com</p>
                <p><a href="https://shimo.im/doc/XhOt90ueJr0wHIXi/" target="“_blank&quot;">常见问题解答</a></p>
            </div>
            <div class="link">
                <h4>友情链接</h4>
                <ul>
                    <li>
                        <a href="">百度</a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="http://www.iresearch.tv/wp-content/themes/urionz/static/imgs/zbgc.png"/>
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
                <p>Copyright © 2018</p>
            </section>
        </footer>
    </div>
</template>
<script>
    export default {
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
            }

        }
        footer{
            width:100%;
            color:#999;
            a{
                color:#999;
                &:hover{
                    color:#31c27c;
                }
            }
            .copyright{
                text-align: center;
                padding:24px 0;
            }
        }
    }

</style>
