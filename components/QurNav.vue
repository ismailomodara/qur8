<template>
  <div class='qur-nav'>
    <div>
      <div class='qur-nav--logo'>
        <img src="@/assets/images/qur-logo.png" alt />
      </div>
      <div class='qur-nav--routes'>
        <ul>
          <li class='active'>Home</li>
        </ul>
      </div>
    </div>
    <div class='qur-nav--search'>
      <a href="mailto:hello@qur8.com">hello@qur8.com</a>
      <el-input v-if="false" v-model='query' type='text' placeholder='Search for book' prefix-icon='el-icon-search' />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  position: relative;

  > div:first-child {
    display: flex;
    align-items: center;
  }

  &--logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  &--routes {
    display: flex;
    align-items: center;
    margin-left: 20px;

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

  &--search {
    a {
      color: var(--qur-green);
      font-weight: 500;
    }
  }

  @media (max-width: 600px) {
    &--search {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
