<template>
  <div class='qur-books'>
    <div class='qur-books--header'>
      <h2>Trending Now</h2>
    </div>
    <div class='qur-books--list'>
      <el-row type='flex' :gutter='30' class='flex-wrap'>
        <el-col v-for='book in books' :key='book.id' :md='6'>
          <qur-book :book='book' />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import QurBook from './QurBook'
export default {
  name: 'QurBooks',
  components: { QurBook },
  data() {
    return {
      books: [
        {
          id: 'bilal',
          cover: 'bilal.png',
          title: 'Bilal',
          series: 'Sahaba - The Series'
        },
        {
          id: 'umar-bin-al-khattab',
          cover: 'umar-bin-al-khattab.png',
          title: 'Umar Bin Al-Khattab',
          series: 'Sahaba - The Series'
        },
        {
          id: 'abu-bakr',
          cover: 'abu-bakr.png',
          title: 'Abu Bakr',
          series: 'Sahaba - The Series'
        }
      ]
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
