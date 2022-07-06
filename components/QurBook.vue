<template>
  <div class='qur-book'>
    <div class='qur-book--image'>
      <img :src='require(`~/assets/images/books/${book.cover}`)' :alt='book.title' data-aos="zoom-in" data-aos-delay="200"/>
    </div>
    <div class='qur-book--actions'>
      <el-button size='small' @click='preview'>Preview</el-button>
      <span class='download' @click='download'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
      </svg>
      </span>
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
  },
  data() {
    return {}
  },
  methods: {
    preview() {
      this.$emit('preview');
    },
    download() {
      window.open(this.book.download);
    }
  }
}
</script>

<style lang='scss' scoped>
.qur-book {
  border-radius: 20px;
  background: var(--qur-white);
  padding: 30px;
  -webkit-box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
  box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;


  &--image {
    text-align: center;
    height: auto;
    width: 80%;
    -webkit-box-shadow: 0 0 30px 0 rgb(82 63 105 / 20%);
    box-shadow: 0 0 30px 0 rgb(82 63 105 / 20%);

    img {
      border-radius: 8px;
      height: 100%;
      width: 100%;
      margin: 0 auto;
    }
  }

  &--actions {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    margin-left: 10px;
    height: 30px;
    width: 30px;
    border-radius: 100px;
    background: var(--qur-green);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
