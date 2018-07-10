<template>
    <section class="message-page">
        <div class="anchor-info">
            <div>
                <img :src="comment.anchorInfo.anchor_img">
                <p>{{comment.anchorInfo.anchor_name}}</p>
            </div>
            <el-button type="primary" @click="addComment">添加留言</el-button>
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
                <li v-for="comment in comment.commentList">
                    <div class="user">
                        <img src="http://img3.imgtn.bdimg.com/it/u=924427432,4036562115&fm=27&gp=0.jpg">
                        <p>匿名网友</p>
                    </div>
                    <div class="user-message">
                        {{comment.content}}
                        <p>
                            {{comment.comment_date}}
                        </p>
                    </div>
                </li>
            </ul>
            <div v-if="comment.commentList.length===0">
                <p style="text-align: center;margin-top:200px;">
                    暂时没有人给主播留言
                </p>
            </div>
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
                    placeholder="请输入留言"
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
    import axios from '~/plugins/axios';
    export default {
        async asyncData({ query,error}) {
            let {data} = await axios.get('/api/site/anchor/getAnchorComment', {
                params: {
                    anchor_id: query.anchorId
                }
            });
            if(data.data){
                return{
                    comment:data.data
                }
            }else{
                error({ statusCode: 404, message: '暂无数据' })
            }
        },
        data(){
            return{
                dialogVisible:false,
                message:''
            }
        },
        methods:{
            addComment(){
                this.dialogVisible = true;
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
            }
        }
    }
</script>
<style lang="less">
    .message-page{
        width:1200px;
        margin:0 auto;
        .anchor-info{
            display: flex;
            justify-content:space-between;
            align-items:flex-end;
            margin:20px 0;
            >div{
                width:60px;
                margin:0 auto;
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
        }
        ul{
            li{
                border:1px solid #ccc;
                padding:20px 10px;
                display: flex;
                align-items:flex-end;
                margin-top:-1px;
                .user{
                    width:60px;
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
                    padding:0 20px;
                    font-size:14px;
                }
            }
        }
    }
</style>