<template>
  <div class="app" ref="bodyPage">
    <nav-bar></nav-bar>
    <div class="content">
      <img class="content-background" :src="contentBackgroundImg" />
      <div class="content-body">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  },

  data: function() {
    return {
      contentBackgroundImg: 'https://uhdwallpapers.org/uploads/converted/18/03/03/perfect-winter-view-5120x2880_7464-mm-90.jpg'
      // contentBackgroundImg: 'https://s2.best-wallpaper.net/wallpaper/2560x1440/1805/Food-bread-wheat_2560x1440.jpg'
      // contentBackgroundImg: 'http://pic43.photophoto.cn/20170413/0008118290016449_b.jpg'
    }
  },

  mounted: function() {
  }
}
</script>

<style>
  html, body {
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
    /*overflow: hidden;*/
  }
  .app {
    font-family:Georgia, 'Times New Roman', Times, serif;
    user-select: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .content {
    z-index: 1;
    width: 100%;
    height: 90%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: silver;
  }
  .content-background {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .content-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
  .content-card {
    width: 52%;
    height: 96%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    border: 1px solid #D7DDE4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card-title {
    width: 100%;
    height: 12%;
    position: relative;
    font-size: 36pt;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-bottom: 1px solid #E7EFE4;
  }
  .card-body {
    width: 100%;
    height: 88%;
    position: relative;
  }
</style>
