<template>
  <div class='qur-nav'>
    <div class='qur-nav--logo'>
      <img src="@/assets/images/qur-logo.png" alt />
    </div>
    <div class='qur-nav--routes'>
      <ul>
        <li class='active'>Home</li>
        <li>Books</li>
      </ul>
    </div>
    <div v-if='false' class='qur-nav--search'>
      <el-input v-model='query' type='text' placeholder='Search for book' prefix-icon='el-icon-search' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QurNav',
  data() {
    return {
      query: ""
    }
  }
}
</script>

<style lang='scss' scoped>
.qur-nav {
  padding: 20px 0;
  width: 100%;
  background: var(--qur-white-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  position: relative;

  &--logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  &--routes {
    //position: absolute;
    //left: 45%;
    //transform: translateX(-50%);

    ul {
     margin: 0;
     padding: 0;
     list-style-type: none;
     display: flex;
     align-items: center;

     li {
       padding: 10px 15px;
       font-weight: 500;
       cursor: pointer;
       position: relative;

       &.active {
         color: var(--qur-green);

         &::after {
           content: "";
           position: absolute;
           height: 4px;
           width: 4px;
           z-index: 1;
           background: var(--qur-green);
           bottom: 2px;
           left: 50%;
           border-radius: 50px;
           transform: translateX(-50%);
         }
       }
     }
   }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    &--routes {
      //right: 0;
      //left: unset;
      //transform: unset;
    }

    &--search {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
