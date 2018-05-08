<template>
  <section class="index-page">
      <section class="container">
          <div class="banner">
              <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in carouselList" :key="index" @click="toLink(item.href)">
                      <img :src="item.img"/>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <section class="main">
              <div class="main-container">
                  <div class="aside">
                      <h2>热门</h2>
                      <ul class="widget">
                          <li>
                              <a href="">
                                  <img src="https://image.uisdc.com/wp-content/uploads/2015/05/dkt-160100-07118.png">
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <img src="https://image.uisdc.com/wp-content/uploads/2015/05/dkt-160100-07118.png">
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <img src="https://image.uisdc.com/wp-content/uploads/2015/05/dkt-160100-07118.png">
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <img src="https://image.uisdc.com/wp-content/uploads/2015/05/dkt-160100-07118.png">
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div class="content">
                      <div class="recommend">
                          <h2>今日推荐</h2>
                          <ul>
                              <li>
                                  <h3>
                                      <a>2018年4月前端开发者超实用干货大合集</a>
                                  </h3>
                                  <p class="article-info">
                                      2018-04-08  |  作者：小虫
                                  </p>
                                  <div>
                                      <a>
                                          <img src="https://image.uisdc.com/wp-content/uploads/2018/04/designers-developers-monthly-04-2018.jpg"/>
                                      </a>
                                  </div>
                                  <p class="article-summary">对于 PHP，虽然很多人都有所误解，甚至觉得它在走下坡路，但是它依然是目前 Web 应用开发中最热门的选择之一。自从 PHP 7 推出以来，PHP 的突破是…</p>
                              </li>
                              <li style="margin-bottom:0">
                                  <h3>
                                      <a>2018年4月前端开发者超实用干货大合集</a>
                                  </h3>
                                  <p class="article-info">
                                      2018-04-08  |  作者：小虫
                                  </p>
                                  <div>
                                      <a>
                                          <img src="https://image.uisdc.com/wp-content/uploads/2018/04/designers-developers-monthly-04-2018.jpg"/>
                                      </a>
                                  </div>
                                  <p class="article-summary">对于 PHP，虽然很多人都有所误解，甚至觉得它在走下坡路，但是它依然是目前 Web 应用开发中最热门的选择之一。自从 PHP 7 推出以来，PHP 的突破是…</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
      </section>
  </section>
</template>

<script>
    export default {
        data(){
            return{
                carouselList:[
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                    {
                        'img':'https://image.uisdc.com/wp-content/uploads/2018/03/uisdc-bbanner-1836.jpg',                            'href':'http://www.baidu.com'
                    },
                ]
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
                  width:1000px;
                  margin:0 auto;
                  img{
                      width:100%;
                      height:auto;
                  }
              }
          }
          .main{
              background: #fafafa;
              .main-container{
                  width:1000px;
                  margin:0 auto;
                  background: #ffffff;
                  .aside{
                      float:left;
                      width:165px;
                      border-right:1px solid #eee;
                      height:600px;
                      padding-top:25px;
                      padding-right:35px;
                      padding-left:10px;
                      padding-bottom:1px;
                      ul.widget{
                          li{
                              width:180px;
                              margin:25px 0;
                              img{
                                  width:180px;
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
                      .recommend{
                          box-sizing:border-box;
                          width:800px;
                          padding:0 80px 0 35px;
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
                                              color: #000;
                                              border-bottom: 1px solid #000!important;
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
              }
          }

      }
  }
</style>
