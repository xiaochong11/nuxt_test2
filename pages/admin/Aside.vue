<template>
    <el-container style="min-height:100%;" class="admin_container">
        <el-aside style="min-height:100%;min-width:250px;" width="250px">
            <el-menu :default-active="defaultActive"
                     background-color="#324157"
                     text-color="#bfcbd9"
                     active-text-color="#409EFF"
                     style="position:fixed;top:0;left:0;min-height: 100%;width:250px;z-index:100"
                     router>
                <el-menu-item index="index"><i class="el-icon-menu"></i>总览</el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-document"></i>文章</template>
                    <el-menu-item index="articleList">文章列表</el-menu-item>
                    <el-menu-item index="articleCreate">新增文章</el-menu-item>
                </el-submenu>

                <el-menu-item index="loginInfo"><i class="el-icon-menu"></i>登录信息</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <div class="header_container">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in $route.meta.navPath" key="index">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
                <el-dropdown @command="handleCommand" menu-align='start' placement="top-start">
                    <!--<img :src="orgInfo.avatar" class="avator">-->
                    <span class="avator">{{username}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="home">总览</el-dropdown-item>
                        <el-dropdown-item command="singout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <slot></slot>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data(){
            return {
                username:'管理员'
            }
        },
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/admin/', '');
            }
        },
        methods:{
            handleCommand(command) {
                if (command === 'home') {
                    this.$router.push('/admin/index');
                }else if(command === 'singout') {
                    //登出操作
                    this.$api.get('/misc/logout',{token:window[window.info].token},res=>{
                        store.removeItem(window.info);
                        this.$router.push('/admin/login');
                    })
                }
            },
        }
    }
</script>
<style lang="less">
    .admin_container{
        .el-menu{
            border-right:none;
            div{
                font-size:16px;
            }
            li{
                font-size:16px;
            }
            i{
                font-size:16px;
            }
        }
        .el-main{
            font-size:14px;
            min-width:1000px;
        }
        .el-dropdown{
            cursor: pointer;
        }
        .el-submenu>.el-menu{
            >li{
                background-color:#1f2d3d!important;
                &:hover{
                    background-color:#48576a!important;
                }

            }
        }
        .el-menu-item:hover{
            background-color:#48576a!important;
        }
        .el-submenu__title:hover{
            background-color:#48576a!important;
        }
        .el-submenu__title i{
            color:#bfcbd9;
        }
        .el-icon-menu,.el-icon-document{
            height:22px;
        }

        .el-main{
            padding:0;
            .header_container{
                background-color: #EFF2F7;
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 20px;
            }
            .avator{
                border-radius: 50%;
                margin-right: 37px;
            }
            .el-dropdown-menu__item{
                text-align: center;
            }
        }
        //去掉面包屑的可点击显示
        .el-breadcrumb__item{
            cursor: text;
            &>span:hover{
                cursor: text;
                color:#2d2f33;
            }
        }
    }
    .operating{
        color:#409eff;
        >span{
            margin:0 10px;
            cursor:pointer;
        }
    }
    .el-table{
        color:#5a5e66
    }

</style>
