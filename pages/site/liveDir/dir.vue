<template>
    <section class="competition-page">
        <div class="page">
            <div class="os">
                <button :class="{'active':os==='huya'}" @click="activeOs('huya')">虎牙</button>
                <button :class="{'active':os==='douyu'}"  @click="activeOs('douyu')">斗鱼</button>
            </div>
            <div>
                <!--<p>更新时间：{{}}</p>-->
            </div>
            <ul>
                <li v-for="(anchor,index) in anchorList" :key="index">
                    <a :href="anchor.anchor_link" target="_blank">
                        <div>
                            <img :src="anchor.anchor_img"/>
                        </div>
                        <p>
                            {{anchor.anchor_name}}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import {osArr} from '../../../conf/index'
    import axios from '~/plugins/axios';
    export default {
        head () {
//            return {
//                title: this.$route.query.name+',主播推荐|直播客',
//                meta: [
//                    {hid: 'keywords', name: 'keywords', content: this.$route.query.name+',主播推荐|直播客'},
//                    {hid: 'description', name: 'description', content: this.$route.query.name+',主播推荐|直播客'},
//                    {hid: 'robots', name:"robots",content:"nofollow"}
//                ]
//            }
        },
        async asyncData({ query,error}){
            console.log('/dir:');
            let {data} = await axios.get('/api/site/anchor/getDirAnchor',{
                params:{
                    dir_id:query.dir_id
                }
            });
            if(data.data){
                return {
                    anchorList:data.data
                };
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                article:{
                    anchorList:[]
                }
            }

        },
        methods:{
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
                    width:146px;
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
                        height:auto;
                        max-height:200px;
                    }
                    &>p{
                        font-size:14px;
                        word-break:keep-all;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        margin:10px 0;
                        text-align: center;
                    }
                }
            }
        }

    }
</style>