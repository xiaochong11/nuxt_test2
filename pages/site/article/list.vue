<template>
    <section class="article-list-page">
        <section class="main">
            <div class="content">
                    <ul>
                        <li>
                            <div class="left">
                                <img src="https://image.uisdc.com/wp-content/uploads/2018/04/designers-developers-monthly-04-2018.jpg"/>
                            </div>
                            <div class="right">
                                <h3>
                                    <a>2018年4月前端开发者超实用干货大合集</a>
                                </h3>
                                <p class="article-summary">对于 PHP，虽然很多人都有所误解，甚至觉得它在走下坡路，但是它依然是目前 Web 应用开发中最热门的选择之一。自从 PHP 7 推出以来，PHP 的突破是…</p>
                                <p class="article-info">
                                    2018-04-08  |  作者：小虫
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
        </section>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                carouselList:[
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                ]
            }
        }

    }

</script>

<style lang="less">
    .article-list-page{
        background: #fafafa;
        .main{
            width:1000px;
            margin:0 auto;
            background-color: #fff;
                .content{
                    float:none;
                    margin-left:200px;
                    width:800px;
                    /*height:600px;*/
                    padding-top:25px;
                        ul{
                            li{
                                font-size:0;
                                .left{
                                    display: inline-block;
                                    width:30%;
                                    img{
                                        width:100%;
                                    }
                                }
                                .right{
                                    display: inline-block;
                                    width:65%;
                                    margin-left:5%;
                                    font-size:14px;
                                    h3{

                                        a{
                                            color:#1582bd;
                                            &:hover{
                                                color: #000;
                                                border-bottom: 1px solid #000!important;
                                            }
                                        }
                                    }
                                    p{
                                        margin:15px 0;
                                    }
                                    p.article-info{
                                        font-size:12px;
                                        color:#bbb;
                                    }
                                    p.article-summary{
                                        font-size:13px;
                                    }
                                }


                            }
                        }
                }
        }
    }

</style>
