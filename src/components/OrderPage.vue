<template>
  <div class="content-card">
    <div class="card-title" style="font-size: 26pt;">
      Please check your order...
    </div>
    <div class="card-body">
      <div class="order-pane-wrapper">
        <div class="order-pane">
          <div class="order-list">
            <div class="order"></div>
            <div class="order" style="background: black"></div>
            <div class="order" style="background: white"></div>
            <div class="order"></div>
            <div class="order" style="background: purple"></div>
            <div class="order" style="background: green"></div>
            <div class="order"></div>
            <div class="order" style="background: silver"></div>
          </div>
          <div class="order-summary">
          </div>
        </div>
      </div>
      <div class="button-pane-wrapper">
        <div class="button-pane">
            <ButtonGroup style="width: 100%; height: 30%; margin: 1% 0;">
              <Button class="button" v-on:click="backToMenu">
                <Icon type="ios-arrow-back" />
                Back
              </Button>
              <Button class="button" style="background-color: #5A6A7A; color: white;" v-on:click="confirmOrder">
                Confirm
                <Icon type="ios-arrow-forward" />
              </Button>
            </ButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OrderPage',

  methods: {
    backToMenu: function () {
      this.$router.push({
        path: '/menu'
      })
    },

    confirmOrder: function () {
      this.$router.push({
        path: '/receipt'
      })
    }
  }
}
</script>

<style scoped>
.order-pane-wrapper {
  width: 100%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.order-pane {
  width: 60%;
  height: 90%;
  position: relative;
  background: white;
  border-radius: 4px;
  /* border: 1px solid #E7EFE4; */
  overflow: hidden;
}
.order-list {
  width: 100%;
  height: 84%;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
}
.order-list::-webkit-scrollbar {
  width: 0 !important;
}
.order {
  width: 100%;
  height: 20%;
  background: brown;
  position: relative;
}
.order-summary {
  width: 100%;
  height: 16%;
  background: yellow;
}
.order-pane:hover {
  box-shadow: 0 0 5px lightgrey;
  transition: ease-in;
  transition-duration: 0.2s;
}
.button-pane-wrapper {
  width: 100%;
  height: 30%;;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-pane {
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button {
  font-size: 14pt;
  font-weight: bold;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

