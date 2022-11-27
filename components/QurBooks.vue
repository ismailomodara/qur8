<template>
  <div>
    <div class='qur-books'>
      <div class='qur-books--header' data-aos="fade-up">
        <h2>Trending Now</h2>
      </div>
      <div class='qur-books--list'>
        <el-row type='flex' :gutter='30' class='flex-wrap'>
          <el-col v-for='(book, index) in books' :key='book.id' :sm="12" :md='8'>
            <qur-book :book='book' data-aos="fade-up" @preview='preview(index)' />
          </el-col>
        </el-row>
      </div>
    </div>
    <qur-book-preview :show.sync='previewBook' :book='selectedBook' />
  </div>
</template>

<script>
import QurBook from './QurBook'
import QurBookPreview from './QurBookPreview';

export default {
  name: 'QurBooks',
  components: { QurBookPreview, QurBook },
  data() {
    return {
      previewBook: false,
      selectedBook: {},
      books: [
        {
          id: 'bilal',
          cover: 'bilal.png',
          title: 'Bilal',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 1000,
          download: null
        },
        {
          id: 'umar-bin-al-khattab',
          cover: 'umar-bin-al-khattab.png',
          title: 'Umar Bin Al-Khattab',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 1000,
          download: "https://www.amazon.com/dp/B0BN28PSWS"
        },
        {
          id: 'abu-bakr',
          cover: 'abu-bakr.png',
          title: 'Abu Bakr',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 1000,
          download: 'https://www.amazon.com/dp/B0BMM5HHP8'
        }
      ]
    }
  },
  methods: {
    preview(index) {
      this.selectedBook = { ...this.books[index] }
      this.previewBook = true;
    }
  }
}
</script>

<style lang='scss' scoped>
.flex-wrap{
  flex-wrap: wrap;
}

.qur-books {
  &--header {
    margin-bottom: 40px;
  }
}
</style>
