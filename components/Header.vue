<template>
    <header>
        <nav>
            <div class="logo">
                <img src="https://www.baidu.com/img/baidu_jgylogo3.gif"/>
            </div>
            <ul>
                <li >
                    <span>首页</span>
                </li>
                <li >
                    <span>首页</span>
                </li>
                <li >
                    <span>首页</span>
                </li>
                <li >
                    <span>首页</span>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style lang="less">
    header{
        background:#fff;
        border-bottom:1px solid #efefef;
        height:60px;
        line-height:60px;
        box-sizing:border-box;
        nav{
            width:1000px;
            margin:0 auto;
            font-size:0;
            height:60px;
            .logo{
                display:inline-block;
                vertical-align: top;
                width:120px;
                img{
                    vertical-align: middle;
                }
            }
            ul{
                font-size:0;
                display:inline-block;
                height:60px;
                width:880px;
                padding:0;
                li{
                    display: inline-block;
                    padding:0 10px;
                    font-size:20px;
                    width:25%;
                    text-align: center;
                    box-sizing:border-box;
                }
            }
        }
    }
</style>
