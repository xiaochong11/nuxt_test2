<template>
  <div>
      <my-header v-if="$route.path.indexOf('admin')<0"/>
      <nuxt/>
      <my-footer v-if="$route.path.indexOf('admin')<0"/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue';
export default {
  components: {
      MyHeader,
      MyFooter
  }
}
</script>

<style>

</style>
