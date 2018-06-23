<template>
    <section class="competition-page">
        <div class="page">
            <div>
                <!--<p>更新时间：{{}}</p>-->
            </div>
            <div class="os">
                <button :class="{'active':os==='huya'}" @click="activeOs('huya')">虎牙</button>
                <button :class="{'active':os==='douyu'}"  @click="activeOs('douyu')">斗鱼</button>
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
                            <i class="os-icon" :style="'background-image:url('+getIcon(competition.os)+')'">
                            </i>
                            {{competition.nick}}
                        </p>
                        <p class="info">
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
    import {osArr} from '../../../conf/index'
    import axios from '~/plugins/axios';
    export default {
        head () {
            return {
                title: '游戏赛事，游戏赛事汇总|直播客',
                meta: [
                    {hid: 'keywords', name: 'keywords', content: '各大直播平台游戏赛事，全网游戏赛事汇总'},
                    {hid: 'description', name: 'description', content: '各大直播平台游戏赛事，全网游戏赛事汇总'},
                    {hid: 'robots', name:"robots",content:"nofollow"}
                ]
            }
        },
        async asyncData({ query,error}){
            let {data} = await axios.get('/api/site/competition/getCompetition');
            console.log(data)
            if(data.data){
                return {competitionList:JSON.parse(data.data),competitionOrigin:JSON.parse(data.data),os:''};
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                article:{
                    os:'',
                    competitionList:[],
                    competitionOrigin:[]
                }
            }

        },
        methods:{
            toCompetition(url){
                window.location.href=url;
            },
            activeOs(os){
                if(this.os === os){
                    this.os = '';
                    this.competitionList = this.competitionOrigin
                }else{
                    this.os = os;
                    let temp = [];
                    this.competitionOrigin.forEach((arr,index)=>{
                        if(arr.os === os){
                            temp.push(arr);
                        }
                    })
                    this.competitionList = temp;
                }

            },
            getIcon(os){
                return osArr.find((arr)=>{
                   return arr.os === os
                }).icon
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
                        position:relative;
                        p{
                            margin-top:10px;
                            font-size:12px;
                            display: inline-block;
                            &.nick{
                                width:150px;
                                .os-icon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    width:20px;
                                    height:20px;
                                    border-radius:50%;
                                    background-size: 100% 100%;
                                }
                            }
                            &.info{
                                position: absolute;
                                top:0;
                                right:0;
                                width:130px;
                                height:20px;
                                overflow: hidden;
                                span{
                                    margin-left:5px;
                                }
                            }
                        }

                    }
                }
            }
        }

    }
</style>