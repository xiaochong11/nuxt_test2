<template>
    <section class="general-article">
       <article>
           <h3>我是标题</h3>
           <p>我是第一段，我是第一段</p>
           <p>我是第二段</p>
       </article>
    </section>
</template>
<script>
    export default {
        data(){

        },
        created(){

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