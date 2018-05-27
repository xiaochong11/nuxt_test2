<template>
    <section class="screen-page">
        <div class="page">
            <div class="room-core">
                <div class="room-core-l" ref="cover">

                </div>
                <div class="room-core-r">
                    <ul id="ul-box">
                        <li v-for="data in dataArr">
                            <span class="username">{{data.username}}</span>
                            <span class="colon">:</span>
                            <span class="message" :style="data.color&&data.color!=='#fff'?'color:'+data.color:'#000'">{{data.message}}</span>
                        </li>
                    </ul>
                    <div class="send-box">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="弹幕墙需要你的火力支援"
                                v-model="textarea">
                        </el-input>
                        <div class="send-button" @click="postMessage">
                            发送
                        </div>
                    </div>
                </div>
            </div>
            <section class="rule">
                <h1>
                    弹幕墙规则
                </h1>
                <article>
                    <p>
                        1.可以为喜欢的主播加油，可以打广告。
                    </p>
                    <p>
                        2.可以喷禁言自己的主播。
                    </p>
                    <p>
                        3.请避免谈论政治等敏感话题，自觉维护弹幕氛围。
                    </p>
                </article>
            </section>
        </div>
    </section>
</template>
<script>
    export default {
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            receiveMessage: function(val){
                this.send(
                    {
                        text:val.message,
                        color:val.color,
                        speed:3
                    }
                );
                this.dataArr.push(val);
            }
        },
        data(){
            return{
                dataArr:[
                    {
                        'username':'张学友',
                        'message':'第1条弹幕'
                    },
                    {
                         'username':'张学友',
                         'message':'第2条弹幕'
                    }
                ],
                textarea:""
            }
        },
        watch:{
            dataArr:function(){
                window.setTimeout(()=>{
                    let ul= document.getElementById('ul-box');
                    console.log(ul.scrollTop,ul.scrollHeight);
                    ul.scrollTop = ul.scrollHeight-ul.clientHeight;
                },
                100
                )

            }
        },
        mounted(){
            //console.log(this.$start);
            this.send = this.$start(this.$refs.cover,[0.2,0.5]);
        },
        methods:{
            postMessage(){
                // $socket is socket.io-client instance
                if(!this.textarea){
                    return;
                }
                this.$socket.emit('postMessage', {
                    username:'匿名用户',
                    message:this.textarea
                });
                this.textarea = '';

            }
        }
    }
</script>
<style lang="less">
    .screen-page{
        .page{
            padding:30px 0;
            width:1200px;
            margin:0 auto;
            .room-core{
                display: flex;
                justify-content: space-between;
                .room-core-l{
                    width:800px;
                    height:600px;
                    background-color: #47494e;
                    .barrage{
                        font-size:40px;
                    }
                }
                .room-core-r{
                    position: relative;
                    width:380px;
                    height:600px;
                    box-sizing:border-box;
                    border: 1px solid #eee;
                    background-color: #fff;
                    ul{
                        padding:10px;
                        box-sizing: border-box;
                        height:525px;
                        overflow-y: auto;

                        li{
                            .username{
                                max-width: 8em;
                                overflow: hidden;
                                white-space: nowrap;
                                word-wrap: normal;
                                text-overflow: ellipsis;
                                color: #3c9cfe;
                                /*cursor: pointer;*/
                            }
                            .colon{
                                color: #3c9cfe;
                                padding: 0 .5em 0 .3em;
                            }
                        }
                    }
                    .send-box{
                        position:absolute;
                        bottom:0;
                        display: flex;
                        box-sizing: border-box;
                        width:100%;
                        padding:10px 20px;
                        border-top: 1px solid #eee;
                        .send-button{
                            width:20%;
                            /*position: absolute;*/
                            /*top: -1px;*/
                            /*right: 0;*/
                            color: #fff;
                            font-size: 14px;
                            font-family: "Microsoft YaHei";
                            background: #ff8a00;
                            height: 54px;
                            line-height: 50px;
                            text-align: center;
                            border-top-right-radius: 3px;
                            border-bottom-right-radius: 3px;
                            cursor:pointer;
                            &:hover{
                                opacity: 0.8;
                            }
                        }
                    }
                }
            }
            .rule{
                width:500px;
                margin:0 auto;
                margin-top:100px;
                h1{
                    /*border-bottom: 1px solid lightgray;*/
                    text-align: center;
                }
            }
        }

    }
</style>