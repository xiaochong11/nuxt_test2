<template>
    <section class="general-article">
       <article>
           <h3>{{article.article_title}}</h3>
           <p class="article-info">
               <span>{{new Date(article.article_create_date).format('yyyy-MM-dd')}}</span>
               <span> | {{article.article_origin||'直播客'}}</span>
           </p>
           <section v-html="article.article_content">

           </section>
       </article>
    </section>
</template>
<script>
    import axios from '~/plugins/axios'
    export default {
        head () {
            return {
                title:this.article.article_title+'，直播界新闻，文章|直播客',
                meta: [
                    { hid: 'keywords', name: 'keywords', content: '直播界的新闻，各大直播平台最新的消息' },
                    { hid: 'description', name: 'description', content: '直播界的新闻，各大直播平台最新的消息' }
                ]
            }
        },
        async asyncData({ query,error}){
          console.log(query);
            let article_id = query.article_id;
            let {data} = await axios.get('/api/site/article/getArticle?article_id='+article_id);
            if(data.data){
                return {article:data.data};
            }else{
                error({ statusCode: 404, message: '页面不翼而飞了' })
            } 
        },
        data(){
            return{
                article:{
                    article_title:'',
                    article_content:''
               }
            }

        },
        created(){

        },
        methods:{
            
        }
    }
</script>
<style lang="less">
    .general-article{
        width:100%;
        padding-top:0;
        article{
            width:800px;
            /*background:#fff;*/
            padding:0 30px;
            margin:0 auto;
            border-top:1px solid transparent;
            h3{
                text-align: center;

            }
            p.article-info{
                color:#8590a6;
                font-size:14px;
            }
            p{
                margin:20px 0;
            }
            img{
                max-width:800px;
                text-align: center;
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