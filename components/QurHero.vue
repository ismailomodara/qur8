<template>
  <div class='qur-hero' data-aos="fade-in">
    <div class='qur-hero--text' data-aos='fade-up' data-aos-delay='200'>
      <h1>Stories in Islam</h1>
      <p>Learn about stories in Islam, through educative and exciting comics.</p>
      <el-button class='el-button--white' size='medium' plain>Explore</el-button>
    </div>
    <div class='qur-hero--image' data-aos="zoom-in-left" data-aos-delay='200'>
      <img src='@/assets/images/read-i.svg'  alt='Read' />
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
  background: var(--qur-green);
  border-radius: 20px;
  min-height: 300px;
  padding: 40px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;

  &--text {
    margin-left: 40px;
    width: 40%;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
      color: var(--qur-white);
      margin: 0 0 10px;
    }

    p {
      color: var(--qur-white);
      opacity: 0.8;
      line-height: 1.8;
      font-weight: 500;
      margin-bottom: 20px;
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

  @media (max-width: 1024px) {
    &--text {
      margin-left: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    &--text {
      width: 100%;
    }

    &--image {
      position: relative;
      bottom: -50px;

      img {
        height: 220px;
      }
    }
  }
}
</style>
