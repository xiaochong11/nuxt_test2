<template>
    <left-aside>
        <section class="ac-container">
            <p>文章标题：<p>
            <p><el-input v-model="title"></el-input></p>
            <p>文章内容</p>
            <div class="quill-editor"
                 :content="content"
                 @change="onEditorChange($event)"
                 @blur="onEditorBlur($event)"
                 @focus="onEditorFocus($event)"
                 @ready="onEditorReady($event)"
                 v-quill:myQuillEditor="editorOption">
            </div>
            <p style="text-align: center">
                <el-button @click="submit">
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
                title:'',
                content: '<p>I am Example</p>',
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
                console.log('editor change!', editor, html, text)
                this.content = html
            },
            async submit(){
                let data = await axios.post('/api/article/postArticle',{
                    article_title:this.title,
                    article_content:this.content
                });
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
