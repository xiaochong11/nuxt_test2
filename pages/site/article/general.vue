<template>
    <section class="general-article">
       <article>
           <h3>{{article.article_title}}</h3>
           <section v-html="article.article_content">

           </section>
       </article>
    </section>
</template>
<script>
    import axios from '~/plugins/axios'
    export default {
        data(){
            return{
                article:{}
            }

        },
        created(){
            this.getArticle()
        },
        methods:{
            async getArticle(){
                let article_id = this.$route.query.id;
                let res = await axios.get('/api/article/getArticle',{params:
                    {
                        article_id:article_id
                    }
                });
                this.article = res.data.data;
            }
        }
    }
</script>
<style lang="less">
    .general-article{
        width:100%;
        article{
            width:1000px;
            margin:0 auto;
            h3{
                text-align: center;
            }
            p{
                margin:20px 0;
            }
            img{
                width:100%;
            }
            audio{
                width:100%;
            }
            video{
                width:100%;
            }
        }
    }
</style>