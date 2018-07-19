<template>
    <section class="dirIndex-page">
        <div class="page">
            <div class="os">
                <button :class="{'active':upperDirCur===dir}" @click="activeUpperDir(dir)" v-for="dir in upperDir">{{dir}}</button>
            </div>
            <div>
                <!--<p>更新时间：{{}}</p>-->
            </div>
            <ul>
                <li v-for="(dir,index) in filter" :key="index" @click="toDir(dir.dir_id,dir.dir_name)">
                    <div>
                        <img :src="dir.cover_img"/>
                    </div>
                    <p>
                        {{dir.dir_name}}
                    </p>
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
            return {
                title: '主播资料大全，技术实力主播，好玩的直播推荐|直播客',
                meta: [
                    {hid: 'keywords', name: 'keywords', content: '网络主播，主播资料大全,主播百科，主播推广评价，人气主播，好玩的直播推荐'},
                    {hid: 'description', name: 'description', content: '提供最全的直播分类，最好玩的直播，为喜欢的主播打call'},
                    {hid: 'robots', name:"robots",content:"nofollow"}
                ]
            }
        },
        async asyncData({ query,error}){
            let {data} = await axios.get('/api/site/liveDir/getAllDir');
            if(data.data){
                let upperDir = [];
                data.data.forEach((arr,index)=>{
                    if(upperDir.indexOf(arr.upper_dir)<=-1){
                        upperDir.push(arr.upper_dir);
                    }
                });
                return {
                    upperDir:upperDir,
                    dirList:data.data,
                    upperDirCur:''
                };
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                article:{
                    dirList:[]
                }
            }

        },
        filters:{

        },
        computed:{
            filter(){
                return this.dirList.filter((arr,index)=>{
                            return this.upperDirCur?arr.upper_dir === this.upperDirCur:true;
                        })

            },
        },
        methods:{
            toDir(dir_id,dir_name){
                console.log(dir_id,dir_name);
                this.$router.push({
                    path:'/site/liveDir/dir',
                    query:{
                        dir_id,
                        dir_name
                    }
                })
            },

            activeUpperDir(upperDir){
                if(this.upperDirCur === upperDir){
                    this.upperDirCur = '';
                }else{
                    this.upperDirCur = upperDir;
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
    .dirIndex-page{
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
                    width:145px;
                    cursor:pointer;
                    background-color:#fff;
                    margin-right:26px;
                    margin-bottom:30px;
                    border-radius:6px;
                    /*&:nth-child(4n){*/
                        /*margin-right:0*/
                    /*}*/
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