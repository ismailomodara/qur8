<template>
  <div class='qur-hero'>
    <div class='qur-hero--text'>
      <h1>Stories in Islam</h1>
      <p>Learn about stories in Islam, through educative and exciting comics.</p>
      <el-button type='primary' size='small'>View all</el-button>
    </div>
    <div class='qur-hero--image'>
      <img src='@/assets/images/read.svg'  alt='Read' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QurHero',
}
</script>

<style lang='scss' scoped>
.qur-hero {
  background: #FEEFE5;
  border-radius: 20px;
  min-height: 300px;
  padding: 40px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;

  &--text {
    margin-left: 40px;
    max-width: 40%;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
      color: var(--qur-green);
      margin: 0 0 10px;
    }

    p {
      color: #141414;
      opacity: 0.8;
      line-height: 1.8;
    }
  }

  &--image {
    position: absolute;
    right: 0;
    bottom: -10px;

    img {
      height: 300px;
      width: auto;
    }
  }
}
</style>
