<template>
    <form id='editfile' method='post' action='/api/admin/upload' enctype='multipart/form-data'>
        <input name="text" type="text"/>
        选择图片：<input name="avatar" id='upfile' type='file'/>
        <input type='submit' value='提交'/>
    </form>
</template>
<script>

</script>
<style lang="less">

</style>