<template>
    <section class="dirAnchor-page">
        <div class="page">
            <p class="location">
                <span>当前位置：</span>
                <span class="dir" @click="toDir">主播推荐/</span>
                <span>{{$route.query.dir_name}}</span>
            </p>
            <div class="os">
                <button :class="{'active':os===osActive}" @click="activeOs(os)" v-for="os in osList">{{getName(os)}}</button>
            </div>
            <p>良心推荐</p>
            <ul>
                <li v-for="(anchor,index) in filter" :key="index" v-if="anchor.label===0">
                    <a :href="anchor.anchor_link" target="_blank">
                        <div class="anchor-img">
                            <img :src="anchor.anchor_img"/>
                        </div>
                        <p class="nick">
                            <i class="os-icon" :style="'background-image:url('+getIcon(anchor.anchor_os)+')'">
                            </i>
                            <span>{{anchor.anchor_name}}</span>
                        </p>
                        <div class="anchor-intro">{{anchor.anchor_intro}}</div>
                    </a>
                </li>
            </ul>
            <p>不良心推荐</p>
            <ul>

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
                title: this.$route.query.dir_name+'|直播客',
                meta: [
                    {hid: 'keywords', name: 'keywords', content: this.$route.query.dir_name+'|直播客'},
                    {hid: 'description', name: 'description', content:this.$route.query.dir_name+'栏目人气主播，为喜欢的主播打call'},
                    {hid: 'robots', name:"robots",content:"nofollow"}
                ]
            }
        },
        async asyncData({ query,error}){
            console.log('/dir:');
            let {data} = await axios.get('/api/site/anchor/getDirAnchor',{
                params:{
                    dir_id:query.dir_id
                }
            });
            if(data.data){
                let osList = [];
                data.data.forEach((arr,index)=>{
                    if(osList.indexOf(arr.anchor_os)<=-1){
                        osList.push(arr.anchor_os);
                    }
                });
                return {
                    osList:osList,
                    osActive:'',
                    anchorList:data.data
                };
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        computed:{
            filter(){
                return this.anchorList.filter((arr,index)=>{
                    return this.osActive?arr.anchor_os === this.osActive:true;
                })
            },
        },
        methods:{
            activeOs(os){
                if(this.osActive === os){
                    this.osActive = '';
                }else{
                    this.osActive = os;
                }

            },
            getIcon(os){
                return osArr.find((arr)=>{
                    return arr.os === os
                }).icon
            },
            getName(os){
                return osArr.find((arr)=>{
                    return arr.os === os
                }).name.replace('直播','')
            },
            toDir(){
               this.$router.push({
                   path:'/site/liveDir',
               })
            }
        }
    }
</script>
<style lang="less">
    .dirAnchor-page{
        .page{
            width:1200px;
            margin:0 auto;
            padding-top:10px;
            .location{
                font-size:14px;
                .dir{
                    cursor:pointer;
                    &:hover{
                        color:rgb(0, 0, 238);
                    }
                }
            }
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
                    width:160px;
                    cursor:pointer;
                    background-color:#fff;
                    margin-right:40px;
                    margin-bottom:30px;
                    border-radius:6px;
                    &:nth-child(6n){
                        margin-right:0
                    }
                    a{
                        &:hover{
                            color:#000;
                        }
                    }
                    .anchor-img{
                        text-align: center;
                        margin:10px 0;
                        img{
                            width:86px;
                            height:86px;
                            border-radius:50%;
                        }
                    }

                    p{
                        font-size:14px;
                        word-break:keep-all;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        margin:10px 0;
                        text-align: center;
                    }
                    .os-icon{
                        display: inline-block;
                        vertical-align: middle;
                        width:20px;
                        height:20px;
                        border-radius:50%;
                        background-size: 100% 100%;
                        margin-right:10px;
                    }
                    .anchor-intro{
                        color:#999;
                        height:32px;
                        font-size:12px;
                        line-height: 16px;
                        text-align: center;
                        overflow: hidden;
                    }
                }
            }
        }

    }
</style>