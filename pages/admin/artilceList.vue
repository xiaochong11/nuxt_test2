<template>
    <left-aside>
        <section class="al-container">
            <el-table
                    :data="articleList"
                    style="max-width: 1000px;">
                <el-table-column
                        prop="article_id"
                        label="文章ID"

                        width="100">
                </el-table-column>
                <el-table-column
                        prop="article_title"
                        label="文章标题">
                </el-table-column>
                <el-table-column
                        prop="article_create_date"
                        label="创建日期">
                </el-table-column>
                <el-table-column
                        prop="article_create_date"
                        label="修改日期">
                </el-table-column>
            </el-table>
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
                articleList:[]
            }
        },
        created(){

        },
        mounted() {

        },
        methods: {
            async getArticleList(){
                let res = await axios.get('/api/article/getArticleList',{

                });
                this.articleList = res.data.data;
            }
        }
    }
</script>

<style lang="less" scoped>
    .al-container {
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
