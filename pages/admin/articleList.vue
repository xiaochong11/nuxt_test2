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
                        prop="article_auth_id"
                        label="作者ID"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="article_create_date"
                        label="创建日期">
                </el-table-column>
                <el-table-column
                        prop="article_create_date"
                        label="修改日期">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="140">
                    <template slot-scope="scope">
                        <div class="operating">
                            <span @click="editArticle(scope.row)">编辑</span>
                            <!--<span @click="deleteCourse(scope.row)">禁用</span>-->
                        </div>
                    </template>
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
            this.getArticleList();
        },
        methods: {
            async getArticleList(){
                let {data} = await axios.get('/api/admin/getArticleList',{

                });
                this.articleList = data.data;
            },
            async editArticle(row){
                this.$router.push({
                    path:'/admin/articleUpdate',
                    query:{
                        article_id:row.article_id
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .al-container {
        padding:30px;
        .quill-editor {
            min-height: 200px;
            max-height: 400px;
            overflow-y: auto;
        }
    }
</style>
