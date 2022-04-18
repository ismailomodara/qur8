<template>
  <div class='qur-book'>
    <img :src='require(`~/assets/images/books/${book.cover}`)' :alt='book.title' />
    <div class='qur-book--actions'>
      <el-button type='text' size='mini'>View</el-button>
      <el-button type='primary' size='mini' plain>Download</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QurBook',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.qur-book {
  border-radius: 20px;
  text-align: center;
  background: #FFFFFF;
  padding: 20px;
  -webkit-box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
  box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);

  img {
    border-radius: 8px;
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
