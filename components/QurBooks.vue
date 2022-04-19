<template>
  <div>
    <div class='qur-books'>
      <div class='qur-books--header'>
        <h2>Trending Now</h2>
      </div>
      <div class='qur-books--list'>
        <el-row type='flex' :gutter='30' class='flex-wrap'>
          <el-col v-for='(book, index) in books' :key='book.id' :sm="12" :md='8'>
            <qur-book :book='book' @download='download(index)' />
          </el-col>
        </el-row>
      </div>
    </div>
    <paystack-modal v-if='false' :book='selectedBook' />
  </div>
</template>

<script>
import QurBook from './QurBook'
import PaystackModal from './Paystack'
export default {
  name: 'QurBooks',
  components: { PaystackModal, QurBook },
  data() {
    return {
      selectedBook: {},
      books: [
        {
          id: 'bilal',
          cover: 'bilal.png',
          title: 'Bilal',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 5000
        },
        {
          id: 'umar-bin-al-khattab',
          cover: 'umar-bin-al-khattab.png',
          title: 'Umar Bin Al-Khattab',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 5000
        },
        {
          id: 'abu-bakr',
          cover: 'abu-bakr.png',
          title: 'Abu Bakr',
          series: 'Sahaba - The Series',
          intro: 'Lorem ipsum dolor sit amet, consectetur aipiscing elit. Accumsan ipsum tincidunt facilisi luctus assa.',
          price: 5000
        }
      ]
    }
  },
  methods: {
    download(index) {
      this.selectedBook = { ...this.books[index] }
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
