<template>
    <section class="download-page">
        <div class="page">
            <ul>
                <li v-for="item in downloadArr" @click="toDownload(item.url)">
                    <a :href="item.url" target="_blank">
                        <div class="os-logo" :style="'background-image:url('+item.img+')'"></div>
                        <div class="to-download">
                            <h1>{{item.os}}</h1>
                            <div>
                                <a>进入下载</a>
                            </div>

                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import {downloadArr} from '../../../conf/index';
    export default {
        data(){
            return{
                downloadArr:downloadArr
            }
        },
        methods:{
            toDownload(url){

            }
        }
    }
</script>
<style lang="less">
    .download-page{
        .page{
            width:1200px;
            margin:30px auto;
            ul{
                display: flex;
                flex-wrap:wrap;
                justify-content: space-between;
                li{

                    background-color: #fff;
                    margin-bottom:30px;
                    width:380px;
                    font-size:16px;
                    padding:20px;
                    box-sizing: border-box;
                    border-radius: 10px;
                    cursor: pointer;
                    a{
                        display: flex;
                        &:hover{
                            opacity: 0.6;
                            color:#000;
                        }
                        .os-logo{
                            width:100px;
                            height:100px;
                            background-size:100% auto ;
                            background-repeat: no-repeat;
                            background-position: left center;
                        }
                        .to-download{
                            height:100px;
                            margin-left:20px;
                            h1{
                                font-size:18px;
                                margin:20px 0;
                            }
                            a{

                            }
                        }
                    }


                }
            }
        }
    }
</style>