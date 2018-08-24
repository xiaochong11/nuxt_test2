<template>
    <section class="dirAnchor-page">
        <div class="page">
            <p class="location">
                <span>搜索词：</span>
                <span>{{$route.query.searchItem}}</span>
            </p>
            <section v-if="anchorList.length===0">
                <p style="text-align: center">没有搜索结果</p>
            </section>
            <section v-else>
                <div class="os">
                    <button :class="{'active':os===osActive}" @click="activeOs(os)" v-for="os in osList">{{getName(os)}}</button>
                </div>
                <ul>
                    <li v-for="(anchor,index) in filter" :key="index" v-if="anchor.label===0"   @mouseenter="enter(index)" @mouseleave="leave" :class="{'cur-li':curIndex === index}">
                        <a :href="anchor.anchor_link" target="_blank" @click="updateTimes(anchor.anchor_id)">
                            <div class="anchor-img">
                                <img :src="anchor.anchor_img"/>
                            </div>
                            <p class="nick">
                                <i class="os-icon" :style="'background-image:url('+getIcon(anchor.anchor_os)+')'">
                                </i>
                                <span>{{anchor.anchor_name}}</span>
                            </p>
                        </a>
                        <div class="anchor-intro" @click="toComment(anchor)">{{anchor.anchor_intro}}</div>
                        <div v-show="curIndex === index" class="li-footer" @click="toComment(anchor)">
                            <span>留言数：</span>
                            <span class="label">{{anchor.comment_count}}</span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="recommend-tip" @click="recommend">
            <span>我要推荐主播</span>
        </div>
        <el-dialog
                title="推荐主播"
                :visible.sync="dialogVisible"
                center
        >
            <el-form ref="form" :model="anchor" label-width="80px">
                <el-form-item label="主播名称">
                    <el-input
                            placeholder="主播名称"
                            v-model="anchor.anchor_name">
                    </el-input>
                </el-form-item>
                <el-form-item label="所在平台">
                    <el-select v-model="anchor.anchor_os" placeholder="请选择">
                        <el-option
                                v-for="(item,index) in osArr"
                                :key="index"
                                :label="item.name"
                                :value="item.os">
                        </el-option>
                    </el-select>
                </el-form-item>
                <!--<el-form-item label="直播分类">-->
                    <!--<el-select v-model="anchor.anchor_os" placeholder="请选择">-->
                        <!--<el-option-->
                                <!--v-for="(item,index) in osArr"-->
                                <!--:key="index"-->
                                <!--:label="item.name"-->
                                <!--:value="item.os">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->

                <el-form-item label="主播介绍">
                    <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="主播介绍"
                            v-model="anchor.anchor_intro">
                    </el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAnchorSure">确 定</el-button>
            </span>
        </el-dialog>
    </section>
</template>
<script>
    import {osArr} from '../../../conf/index'
    import axios from '~/plugins/axios';
    export default {
        head () {
            return {
                title: `${this.$route.query.searchItem}的结果页，技术主播、实力主播排名、主播社区|直播客`,
                meta: [
                    {hid: 'keywords', name: 'keywords', content: `${this.$route.query.searchItem}的结果页}`},
                    {hid: 'description', name: 'description', content:`${this.$route.query.searchItem},主播交流社区，栏目人气主播，为喜欢的主播打call`},
                    {hid: 'robots', name:"robots",content:"nofollow"}
                ]
            }
        },

        async asyncData({ query,error}){
            console.log('/dir:');
            let {data} = await axios.get('/api/site/anchor/getSearchAnchor',{
                params:{
                    searchItem:query.searchItem
                }
            });
            if(data.data){

                let osList = [];
                if(data.data.length){
                    data.data.forEach((arr,index)=>{
                        if(osList.indexOf(arr.anchor_os)<=-1){
                            osList.push(arr.anchor_os);
                        }
                    });
                }

                return {
                    osList:osList,
                    osActive:'',
                    anchorList:data.data
                };
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                curIndex:-1,
                dialogVisible:false,
                osArr:osArr,
                anchor:{

                }
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
            recommend(){
                this.dialogVisible = true;
            },
            async addAnchorSure(){
                this.dialogVisible = true;
                this.anchor.recommend_auth_id = 0;
                this.anchor.deleted = 1;
                let {data} = await axios.post('/api/site/anchor/addAnchor',this.anchor);
                this.anchor = {};
                if(data.code === 200){
                    window.bus.$emit('dialogShow','推荐成功，我们稍后会审核',()=>{
                        this.dialogVisible = false;
                    })
                }else{
                    window.bus.$emit('dialogShow','推荐失败，请稍后再试',()=>{
                        this.dialogVisible = false;
                    })
                }
            },
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
            },
            enter(index){
                console.log('enter');
                this.curIndex = index;
            },
            leave(){
                this.curIndex = -1;
            },
            updateTimes(anchor_id){
                console.log('update');
                axios.get('/api/site/anchor/upadteAnchorTimes',{
                    params:{
                        anchor_id:anchor_id
                    }
                })
            },
            toComment(anchor){
                console.log('to...');
                this.$router.push({
                    path:'/site/liveDir/anchorMessage',
                    query:{
                        anchorName:anchor.anchor_name,
                        anchorId:anchor.anchor_id
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    .dirAnchor-page{
        .el-select {
            width: 100%;
        }

        .recommend-tip{
            position: fixed;
            right:0;
            top:50%;
            width:80px;
            height:50px;
            line-height: 50px;
            text-align: center;
            color:#fff;
            background-color: #00B7FF;
            cursor: pointer;
        }
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
                padding:20px 0;
                display: flex;
                flex-wrap: wrap;

                li{
                    /*display: inline-block;*/
                    width:160px;
                    cursor:pointer;
                    background-color:#fff;
                    margin-right:40px;
                    margin-bottom:30px;
                    border-radius:6px;
                    height:169px;
                    &:nth-child(6n){
                        margin-right:0
                    }
                    &.cur-li{
                        height:196px;
                        margin-top:-15px;
                        margin-bottom:0px;
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
                        &:hover{
                            color:#00B7FF;
                        }
                    }
                    .li-footer{
                        font-size:12px;
                        margin:5px 0;
                        text-align: center;
                        &:hover{
                            color:#00B7FF;
                        }
                        .label{

                            /*padding:5px;*/
                        }
                    }
                }
            }
        }

    }
</style>