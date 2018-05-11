<template>
  <div>
      <my-header v-if="$route.path.indexOf('admin')<0"/>
      <nuxt/>
      <my-footer v-if="$route.path.indexOf('admin')<0"/>
      <el-dialog title="提示" :visible.sync="dialogFlag" width="30%" center append-to-body>
          <span style="text-align:center">{{content}}</span>
          <span slot="footer" class="dialog-footer">
			  <el-button type="primary" @click="closeDialog(cb)">确 定</el-button>
		  </span>
      </el-dialog>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue';
import Vue from 'vue';
export default {
  components: {
      MyHeader,
      MyFooter
  },
  data(){
        return {
            dialogFlag:false,
            content:'',
            cb:null
        }
    },
    created(){
        console.log(process.browser);
        if (process.browser) {
            window.bus = new Vue();
            window.bus.$on('dialogShow',(content,cb)=>{
                this.dialogFlag = true;
                this.content = content;
                this.cb = cb;
            });
        }

    },
    methods:{
        closeDialog(cb){
            this.dialogFlag = false;
            typeof cb === 'function'&&cb();
        }
    },
}
</script>

<style>

</style>
