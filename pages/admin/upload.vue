<template>
    <left-aside>
        <div class="upload-page">
                <p>请选择图片：</p>
                <div>
                    <input name="avatar" type='file' @change="update"/>
                </div>
                <div>
                    <el-button @click="submit">提交</el-button>
                </div>
        </div>
    </left-aside>
</template>
<script>
    import LeftAside from './Aside.vue';
    import axios from '~/plugins/axios'
    export default {
        components:{
            LeftAside
        },
        data(){
            return{
                param:{}
            }
        },
        methods:{
            update(e){
                let file = e.target.files[0];
                this.param = new FormData(); //创建form对象
                this.param.append('avatar',file);//通过append向form对象添加数据
            },
            async submit(){
                let res = await axios.post('/api/admin/upload',this.param,{
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                if(res.data.code===200){
                    alert('上传成功');
                }
            }
        }

    }
</script>
<style lang="less">
    .upload-page{
        width:1000px;
        padding:30px;
        div,p{
            margin:30px 0;
        }
    }
</style>