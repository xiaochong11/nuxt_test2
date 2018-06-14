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
  //        async asyncData ({ params }) {
  //   let { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   return { title: data.title }
  // }
        async asyncData({ query,error}){
//            console.log(query);
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