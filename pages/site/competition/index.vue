<template>
    <section class="competition-page">
        <div class="page">
            <div class="os">
                <button class="active">虎牙</button>
                <button>斗鱼</button>
            </div>
            <ul>
                <Li v-for="(competition,index) in competitionList" :key="index" @click="toCompetition(competition.url)">
                    <div>
                        <img :src="competition.imgUrl"/>
                    </div>
                    <p>
                        {{competition.title}}
                    </p>
                    <div class="li-footer">
                        <p class="nick">
                            {{competition.nick}}
                        </p>
                        <p>
                        <span>{{competition.num}}</span>
                        <span>{{competition.type}}</span>
                        </p>
                    </div>
                </Li>
            </ul>
        </div>
    </section>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData({ query,error}){
            let {data} = await axios.get('http://127.0.0.1:3000/api/site/competition/getCompetition');
            console.log(data)
            if(data.data){
                return {competitionList:JSON.parse(data.data)};
            }else{
                error({ statusCode: 404, message: 'User not found' })
            }
        },
        data(){
            return{
                article:{
                    competitionList:[]
                }
            }

        },
        methods:{
            toCompetition(url){
                window.location.href=url;
            }
        }
    }
</script>
<style lang="less">
    .competition-page{
        .page{
            width:1200px;
            margin:0 auto;
            padding-top:30px;
            .os{
                margin:15px 0;
                button{
                    display: inline-block;
                    margin-right: 18px;
                    color: #2CA6E0;
                    background-color:#fff;
                    font-size: 14px;
                    border-radius: 15px;
                    padding: 2px 15px;
                    outline: none;
                    cursor: pointer;
                    border:none;
                    &:hover{
                        color: #2CA6E0;
                        font-weight: 900;
                    }
                    &.active{
                        color: #2CA6E0;
                        background-color:#d9ecf7;
                        font-weight: 900;
                    }
                }
            }
            ul{
                font-size:0;
                li{
                    display: inline-block;
                    width:280px;
                    cursor:pointer;
                    background-color:#fff;
                    margin-right:26px;
                    margin-bottom:30px;
                    border-radius:6px;
                    &:nth-child(4n){
                        margin-right:0
                    }
                    img{
                        width:100%;
                        border-radius:6px;
                        max-height:157px;
                    }
                    &>p{
                        margin-top:10px;
                        margin-bottom:0;
                        font-size:14px;

                        word-break:keep-all;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .li-footer{
                        font-size:0;
                        p{
                            margin-top:10px;
                            font-size:12px;
                            display: inline-block;
                            &.nick{
                                width:150px;
                            }
                        }

                    }
                }
            }
        }

    }
</style>