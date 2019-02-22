<template>
  <div class="content-card">
    <div class="card-title">
      WELCOME!
    </div>
    <div class="card-body" style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
      <p style="font-size: 18pt; display: flex; align-items: center; justify-content: center; margin: 10px 0;">
        Please tell us if you are a...
      </p>
      <div class="content-panel">
        <div class="content-card customized" v-on:click="navigateTo('register')">
          <div class="card-title" style="font-size: 20pt;">
            New Customer
          </div>
          <div class="card-body">
            <div class="image-wrapper">
              <img :src="newCustomerImg" style="width: 100%; height: auto;" />
            </div>
          </div>
        </div>
        <div class="content-card customized" v-on:click="navigateTo('desk')">
          <div class="card-title" style="font-size: 20pt;">
            Existing Customer
          </div>
          <div class="card-body">
            <div class="image-wrapper">
              <img :src="oldCustomerImg" style="width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',

  data () {
    return {
      newCustomerImg: 'https://raw.githubusercontent.com/sap-vt-innovation-restaurant-team/backend/master/images/logo/unknown.png',
      oldCustomerImg: 'https://raw.githubusercontent.com/sap-vt-innovation-restaurant-team/backend/master/images/logo/known.png'
    }
  },

  methods: {
    navigateTo: function (des) {
      if (des === 'register') {
        this.$router.push({path: '/register'})
      } else if (des === 'desk') {
        this.$router.push({path: '/desk'})
      }
    }
  }
}
</script>

<style scoped>
  .content-panel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .content-card.customized {
    width: 45%;
    height: 95%;
    position: relative;
    margin: 0 10px;
    background-color: white;
  }
  .content-card.customized:hover {
    transition: ease-in;
    transition-duration: 0.2s;
    box-shadow: 0 0 7px lightgray;
    cursor: pointer;
  }
  .image-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
</style>

