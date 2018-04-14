<template>
    <div id="footer-sec">
        <div class="main-footer">

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
                <p>友情链接： <a href="">百度</a> </p>
            </section>
        </footer>
    </div>
</template>
<style lang="less">
    #footer-sec{
        width:100%;
        position:absolute;
        bottom:0;
        .main-footer{
            width:100%;
            height:100px;
            background:#f7f7f7;
        }
        footer{
            width:100%;
            background: #333;
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
