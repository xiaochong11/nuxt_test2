<template>
    <section class="message-page">
        <div class="anchor-info">
            <div>
                <img :src="commentData.anchorInfo.anchor_img">
                <p>
                    <i class="os-icon" :style="'background-image:url('+getIcon(commentData.anchorInfo.anchor_os)+')'">
                    </i>
                    {{commentData.anchorInfo.anchor_name}}
                </p>
            </div>
            <el-button type="primary" @click="addComment">添加短评</el-button>
        </div>
        <div>
            <ul>
                <!--<li>-->
                    <!--<div class="user">-->
                        <!--<img src="http://img3.imgtn.bdimg.com/it/u=924427432,4036562115&fm=27&gp=0.jpg">-->
                        <!--<p>匿名网友</p>-->
                    <!--</div>-->
                    <!--<p class="user-message">主播挺好的</p>-->
                <!--</li>-->
                <li v-for="comment in commentData.commentList">
                    <section class="main">
                        <div class="user">
                            <img src="http://img3.imgtn.bdimg.com/it/u=924427432,4036562115&fm=27&gp=0.jpg">
                            <p>匿名网友</p>
                        </div>
                        <div class="user-message">
                            <p class="content" v-html="comment.content"></p>
                            <p class="date">
                                {{getDate(comment.comment_date)}}
                            </p>
                        </div>
                    </section>
                    <section class="footer">
                        <button @click="updateCommentTimes(comment.comment_id,'up')">
                            <span><i class="el-icon-caret-top"></i></span>
                            <span class="up-num">{{comment.comment_up}}</span>
                        </button>
                        <button @click="updateCommentTimes(comment.comment_id,'down')" style="margin-left:10px;">
                            <span><i class="el-icon-caret-bottom"></i></span>
                            <span class="up-num">{{comment.comment_down}}</span>
                        </button>
                    </section>
                </li>
            </ul>
            <div v-if="commentData.commentList.length===0">
                <p style="text-align: center;margin-top:200px;">
                    该主笔暂时没有评价
                </p>
            </div>
            <p class="footer-tip">{{footerText}}</p>
        </div>
        <el-dialog
                title="留言"
                :visible.sync="dialogVisible"
                center
                width="30%"
        >
            <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="短评支持换行，最多2行，字数最多60字"
                    v-model="message">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCommentSure">确 定</el-button>
            </span>
        </el-dialog>
    </section>
</template>
<script>
    import {osArr} from '../../../conf/index'
    import axios from '~/plugins/axios';
    import $ from 'jquery';
    export default {
        head () {
            return {
                title:`${this.commentData.anchorInfo.anchor_name},${this.commentData.anchorInfo.anchor_name}个人资料|直播客` ,
                meta: [
                    {hid: 'keywords', name: 'keywords', content: `${this.commentData.anchorInfo.anchor_name},${this.commentData.anchorInfo.anchor_name}个人资料,${this.commentData.anchorInfo.anchor_name}的评价，主播评价社区，主播交流社区`},
                    {hid: 'description', name: 'description', content:this.commentData.anchorInfo.anchor_name+'，主播评价社区,主播交流社区，为喜欢的主播打call'},
                    {hid: 'robots', name:"robots",content:"nofollow"}
                ]
            }
        },
        async asyncData({ query,error}) {
            let {data} = await axios.get('/api/site/anchor/getAnchorComment', {
                params: {
                    anchor_id: query.anchorId,
                    page:0
                }
            });
            if(data.data){
                return{
                    commentData:data.data
                }
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                dialogVisible:false,
                message:'',
                page:0,
                footerText:'',
                isScroll:false
            }
        },
        beforeMount () {
            console.log(333);

        },
        upadate(){
            console.log(-1);
        },
        created(){
            console.log(0);
        },
        mounted(){
            this.$nextTick(()=>{
                if (process.browser) {
                    this.listenScroll();
                }
            })

        },
        beforeDestroy(){
            console.log(222);
            if (process.browser) {
                $(window).unbind('scroll');
            }
        },
        methods:{
            getIcon(os){
                return osArr.find((arr)=>{
                    return arr.os === os
                }).icon
            },
            addComment(){
                this.dialogVisible = true;
            },

            getServerData(page) {
                console.log(this.pageNum,page);
                if(this.pageNum===page){//在scroll的判断里会执行2次，很奇怪
                    return;
                }
                this.pageNum = page;
                const num = 3;//每一页接受多少条数据

                axios.get('/api/site/anchor/getAnchorComment', {
                    params: {
                        anchor_id: this.$route.query.anchorId,
                        page:page
                    }
                }).then((res)=>{
                    this.end = false;
                    console.log(res);
                    this.commentData.commentList = this.commentData.commentList.concat(res.data.data.commentList);
                    if(res.data.data.commentList.length<num){
                        this.footerText = "到底了";
                        $(window).unbind('scroll');
                    }
                });
            },
            async addCommentSure(){
               let {data} =  await  axios.post('/api/site/anchor/postAnchorComment',{
                   content:this.message,
                   anchor_id:this.$route.query.anchorId
               });
               if(data.code === 200){
                   this.dialogVisible = false;
                    window.bus.$emit('dialogShow','留言成功',()=>{
                        window.location.reload();
                    })
               }
            },
            async updateCommentTimes(comment_id,item){
                let {data} =  await  axios.get('/api/site/anchor/updateCommentTimes',{
                    params:{
                        comment_id,
                        item
                    }
                });
                if(data.code === 200){
                    this.commentData.commentList.forEach((arr,index)=>{
                        if(arr.comment_id === comment_id){
                            arr['comment_'+item] ++;
                        }
                    })
                }
            },
            getDate(date){
                return  date==='0000-00-00 00:00:00'?date:new Date(date).format("yyyy-MM-dd hh:mm:ss");
            },
            listenScroll(){
                this.end = false;
                $(window).unbind('scroll');
                $(window).bind("scroll",()=>{
                    let scrollTop = $(document).scrollTop();
                    let windowTop = $(window).height();
                    let documentTop = $(document).height();

                    //console.log(documentTop - windowTop,scrollTop);
                    if(scrollTop + windowTop > documentTop-100 && !this.end){

                        this.end = true;
                        this.page++;
                        this.getServerData(this.page);
                    }
                });
            }
        }
    }
</script>
<style lang="less">
    #__nuxt {
        & > *:nth-child(3) {
            display: none;
        }
    }
    .message-page{
        width:1200px;
        margin:0 auto;
        .anchor-info{
            display: flex;
            justify-content:space-between;
            align-items:flex-end;
            margin:20px 0;
            >div{
                margin:0 auto;
                text-align: center;
                img{
                    width:60px;
                    border-radius:50%;
                }
                p{
                    margin:5px 0;
                    font-size:12px;
                    .os-icon{
                        display: inline-block;
                        vertical-align: middle;
                        width:20px;
                        height:20px;
                        border-radius:50%;
                        background-size: 100% 100%;
                        margin-right:5px;
                    }
                }
            }
        }
        ul{
            li{
                /*border:1px solid #ccc;*/
                /*padding:20px 10px;*/
                /*display: flex;*/
                /*align-items:flex-end;*/
                /*margin-top:-1px;*/
                position: relative;
                padding: 16px 20px;
                margin-bottom: 10px;
                background: #fff;
                overflow: hidden;
                border-radius: 2px;
                box-shadow: 0 1px 3px rgba(26,26,26,.1);
                box-sizing: border-box;
                .main{
                    display: flex;
                    align-items:flex-end;
                    .user{
                        width:50px;
                        text-align: center;
                        img{
                            width:100%;
                            border-radius:50%;
                        }
                        p{
                            margin:5px 0;
                            font-size:12px;
                        }
                    }
                    .user-message{
                        padding:0 30px;
                        font-size:14px;
                        p{
                            margin:12px 0;
                        }
                        p.content{
                            max-height:40px;
                        }
                        p.date{
                            font-size:13px;
                            color:#8590a6;
                            margin-bottom:5px;
                        }
                    }
                }
                .footer{
                    margin-top:10px;
                    display: flex;
                    button{
                        padding: 0 10px;
                        color: #0084ff;
                        background: rgba(0,132,255,.1) !important;

                        border-color: transparent;
                        display: inline-block;
                        font-size: 14px;
                        line-height: 32px;
                        text-align: center;
                        cursor: pointer;
                        background: none;
                        border-radius: 3px;
                        .up-num{
                            margin-left:5px;
                        }
                    }

                }
            }
        }
        .footer-tip{
            text-align: center;
            margin:30px 0;
            font-size:14px;
        }
    }
</style>