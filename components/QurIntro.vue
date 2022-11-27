<template>
  <div class='qur-intro' data-aos="fade-in">
    <div class="qur-intro--title" data-aos='fade-up' data-aos-delay='200'>
      <h1>Discover inspiring and essential lessons.</h1>
    </div>
    <div class="qur-intro--description">
      <p>From the lives of some of the greatest historic figures,<span>The Sahaba (The Companions of the Prophet)</span>. Keep up with their origin stories, key events, and accomplishments of these timeless heroes who fostered some of the most influential and prosperous civilizations.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QurIntro',
}
</script>

<style lang='scss' scoped>
.qur-intro {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
  width: 100%;

  > div {
    border-radius: 20px;
    min-height: 250px;
    padding: 40px;
  }

  &--title {
    width: 50%;
    background: var(--qur-cream);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    h1 {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--qur-black);
      opacity: 0.84;
      margin: 0 0 10px;
    }
  }

  &--description {
    width: 70%;
    background: #3f3d56;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
      opacity: 0.8;
      line-height: 1.8;

      span {
        font-weight: 600;
      }
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
