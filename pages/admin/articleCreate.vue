<template>
    <left-aside>
        <section class="ac-container">
            <p>文章标题：<p>
            <p>
                <el-input v-model="articleModel.article_title"></el-input>
            </p>
            <p>封面图片：</p>
            <el-input v-model="articleModel.article_cover_img" placeholder="图片的URL"></el-input>
            <p>文章来源：</p>
            <el-input v-model="articleModel.article_origin" placeholder="不填默认为原创"></el-input>

            <p>文章内容:</p>
            <div class="quill-editor"
                 :content="articleModel.article_content"
                 @change="onEditorChange($event)"
                 @blur="onEditorBlur($event)"
                 @focus="onEditorFocus($event)"
                 @ready="onEditorReady($event)"
                 v-quill:myQuillEditor="editorOption">
            </div>
            <p style="text-align: center">
                <el-button type="primary" @click="submit">
                    提交
                </el-button>
            </p>
        </section>
    </left-aside>
</template>

<script>
    import LeftAside from './Aside.vue';
    import axios from '~/plugins/axios'
    export default {
        components:{
            LeftAside
        },
        data () {
            return {
                articleModel:{
                    article_title:'',
                    article_cover_img:'',
                    article_content:''
                },
                editorOption: {
                    // some quill options
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'font': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                }
            }
        },
        mounted() {
            console.log('app init, my quill insrance object is:', this.myQuillEditor)
            setTimeout(() => {
                this.content = 'i am changed'
            }, 3000)
        },
        methods: {
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) {
                this.articleModel.article_content = html
            },
            async submit(){
                let {data} = await axios.post('/api/admin/postArticle',this.articleModel);
                if(data.code === 200){
                    console.log(200);
                    bus.$emit('dialogShow','增加成功',()=>{
                        this.$router.push({
                            path:'/admin/articleList',
                        })
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .ac-container {
        width: 60%;
        margin: 0 auto;
        padding: 50px 0;
        .quill-editor {
            min-height: 200px;
            max-height: 400px;
            overflow-y: auto;
        }
    }
</style>
