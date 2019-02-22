<template>
  <div class="content-card">
    <div class="card-title" style="font-size: 26pt;">
      Please check your order...
    </div>
    <div class="card-body">
      <div class="order-pane-wrapper">
        <div class="order-pane">
          <div class="order-list">
            <div class="order">
              1. Chicken: 10€
            </div>
            <div class="order">
              2. Beer: 10€
            </div>
            <div class="order">
              3. Cabage: 10€
            </div>
          </div>
          <div class="order-summary">
            Total Cost: <span style="font-size:30pt; color: yellow;">{{ '&nbsp;30&nbsp;'}}</span>€ for 3 dishes
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
        path: '/desk'
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
  background: white;
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 0 5%;
  align-items: center;
  color: black;
  font-size: 20pt;
  font-weight: bold;
  background: #AABACA;
  border-bottom: 1px solid #5A6A7A;
}
.order-summary {
  width: 100%;
  height: 16%;
  background: #5A6A7A;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20pt;
  font-weight: bold;
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

