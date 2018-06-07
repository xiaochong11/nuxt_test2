<template>
  <section class="index-page">
      <section class="container">
          <div class="banner">
              <el-carousel :interval="5000" arrow="always" height="360px">
                  <el-carousel-item v-for="(banner,index) in indexObj.bannerList" :key="index" >
                      <img :src="banner.img_url" @click="toLink(banner.link_url)"/>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <section class="main">
              <div class="main-container">
                  <aside class="left-aside">
                      <h2>热门</h2>
                      <ul class="widget">
                          <li v-for="hot in indexObj.hotList">
                              <a :href="hot.link_url">
                                  <img :src="hot.img_url"/>
                              </a>
                          </li>
                      </ul>
                  </aside>
                  <aside class="right-aside">
                      <div class="title">
                        <h2>弹幕墙</h2>
                        <h2 class="screen" @click="toBulletScreen">我要上墙 ></h2>
                      </div>
                      <ul id="ul-box">
                          <li v-for="data in dataArr">
                              <span class="username">{{data.username}}</span>
                              <span class="colon">:</span>
                              <span class="message" :style="data.color&&data.color!=='#fff'?'color:'+data.color:'#000'">{{data.message}}</span>
                          </li>
                      </ul>
                  </aside>
                  <main class="content">
                      <section class="recommend">
                          <h2>今日推荐</h2>
                          <ul>
                              <li v-for="recommand in indexObj.recommandList">
                                  <h3>
                                      <a :href="recommand.link_url">{{recommand.title}}</a>
                                  </h3>
                                  <p class="article-info">
                                      {{new Date(recommand.date).format('yyyy-MM-dd')}} | 直播客
                                  </p>
                                  <div>
                                      <a :href="recommand.link_url">
                                          <img :src="recommand.img_url"/>
                                      </a>
                                  </div>
                                  <p class="article-summary">{{recommand.abstract}}</p>
                              </li>
                          </ul>
                      </section>
                  </main>

              </div>
          </section>
      </section>
  </section>
</template>

<script>
    import axios from '~/plugins/axios';
    export default {
        head () {
            return {
                title:'直播客|打造直播乐园',
//                meta: [
//                    { hid: 'description', name: 'description', content: 'My custom description' }
//                ]
            }
        },
        async asyncData({ query,error}){
            let {data} = await axios.get('/api/site/index/getList');
            if(data.data){
                return {indexObj:data.data};
            }else{
                error({ statusCode: 404, message: '接口错误' })
            }
        },
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            receiveMessage: function(val){
                this.dataArr.push(val);
            }
        },
        data(){
            return{
                indexObj:{},
                dataArr:[
                    {
                        'username':'张学友',
                        'message':'第1条弹幕'
                    },
                    {
                        'username':'张学友',
                        'message':'第2条弹幕'
                    }
                ],
            }
        },
        mounted(){

        },
        watch:{
            dataArr:function(){
                window.setTimeout(()=>{
                        let ul= document.getElementById('ul-box');
                        console.log(ul.scrollTop,ul.scrollHeight);
                        ul.scrollTop = ul.scrollHeight-ul.clientHeight;
                    },
                    100
                )

            }
        },
        methods:{
            toLink(url){
                console.log(444);
                window.location.href = url;
            },
            toBulletScreen(){
                this.$router.push({
                    path:'/site/bulletScreen'
                })
            }
        }

    }

</script>

<style lang="less">
  .index-page{
      .container{
          padding-top:0;
          padding-bottom:0;
          .banner{
              background:#f7f7f7;
              padding:45px 0 40px;
              .el-carousel{
                  width:1200px;
                  margin:0 auto;
                  img{
                      width:100%;
                      height:auto;
                      cursor:pointer;
                  }
              }
          }
          .main{
              background: #fafafa;
              .main-container{
                  width:1200px;
                  margin:0 auto;
                  background: #ffffff;
                  overflow:hidden;
                  .left-aside{
                      float:left;
                      width:200px;
                      box-sizing:border-box;
                      border-right:1px solid #eee;
                      height:600px;
                      padding-top:25px;
                      padding-right:10px;
                      padding-left:10px;
                      padding-bottom:1px;
                      ul.widget{
                          li{
                              width:180px;
                              margin:25px 0;
                              overflow:hidden;
                              img{
                                  width:100%;

                                  cursor: pointer;
                                  transition: all 0.6s;
                                  &:hover{
                                      transform: scale(1.2);
                                  }
                              }
                          }
                      }
                      h2{
                          font-size:15px;
                          border-bottom:1px solid #eee;
                          padding-bottom:10px;
                          margin-bottom:25px;
                      }
                  }
                  .content{
                      float:none;
                      margin-left:200px;
                      width:800px;
                      /*height:600px;*/
                      padding-top:25px;
                      box-sizing:border-box;
                      .recommend{
                          box-sizing:border-box;
                          width:700px;
                          box-sizing:border-box;
                          padding:0 30px 0 35px;
                          text-align:left;
                          //background:#f00;
                          h2{
                              font-size:15px;
                              border-bottom:1px solid #eee;
                              padding-bottom:10px;
                              margin-bottom:25px;
                          }
                          ul{
                              li{
                                  /*margin-bottom:25px;*/
                                  padding-bottom:30px;
                                  border-bottom:1px solid #eee;
                                  h3{
                                      a{
                                          color:#0da4d3;
                                          &:hover{
                                              color: #1582bd;
                                              border-bottom: 1px solid #1582bd!important;
                                          }
                                      }
                                  }
                                  img{
                                      width:100%;
                                  }
                                  p{
                                      margin:15px 0;
                                  }
                                  p.article-info{
                                      font-size:12px;
                                      color:#bbb;
                                  }
                                  p.article-summary{
                                      font-size:13px;
                                  }
                              }
                          }
                      }
                  }
                  .right-aside{
                      float:right;
                      box-sizing:border-box;
                      width:300px;
                      padding-top:25px;
                      .title{
                          display: flex;
                          justify-content:space-between;
                          margin:0 10px;
                          h2{
                              font-size:15px;
                          }
                          .screen{
                              color:#409EFF;
                              font-size:13px;
                              cursor: pointer;
                          }
                      }

                      ul{
                          padding:10px;
                          box-sizing: border-box;
                          height:400px;
                          overflow-y: auto;
                          border: 1px solid #eee;
                          li{
                              .username{
                                  max-width: 8em;
                                  overflow: hidden;
                                  white-space: nowrap;
                                  word-wrap: normal;
                                  text-overflow: ellipsis;
                                  color: #3c9cfe;
                                  /*cursor: pointer;*/
                              }
                              .colon{
                                  color: #3c9cfe;
                                  padding: 0 .5em 0 .3em;
                              }
                          }
                      }
                  }
              }
          }

      }
  }
</style>
