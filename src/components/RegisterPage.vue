<template>
  <div class="content-card">
    <div class="card-title" style="font-size: 30pt;">
      For a better experience...
      {{user.id}}
    </div>
    <div class="card-body">
      <div class="input-pane-wrapper">
        <div class="input-pane">
          <div class="input-wrapper">
            <div class="label-wrapper">
              NAME:
            </div>
            <div class="inputter">
              <Input v-model="user.name" style="width: 80%;" />
            </div>
          </div>
          <div class="input-wrapper">
            <div class="label-wrapper">
              PHONE:
            </div>
            <div class="inputter">
              <Input v-model="user.phone" style="width: 80%;" />
            </div>
          </div>
          <div class="input-wrapper">
            <div class="label-wrapper">
              EMAIL:
            </div>
            <div class="inputter">
              <Input v-model="user.email" style="width: 80%;" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-pane">
          <ButtonGroup style="width: 80%; height: 30%; margin: 1% 0;">
            <Button class="upper-button" v-on:click="backToHomepage">
              <Icon type="ios-arrow-back" />
              Back
            </Button>
            <Button class="upper-button" v-on:click="setFaceID">
              Set Up FaceID
              <Icon type="ios-arrow-forward" />
            </Button>
          </ButtonGroup>
          <ButtonGroup style="width: 80%; height: 30%; margin: 1% 0;">
            <Button class="lower-button" v-on:click="asAGuest">
              Order without logging in
            </Button>
          </ButtonGroup>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterPage',

  data () {
    return {
      user: {
        name: null,
        email: null,
        phone: null,
        id: null
      }
    }
  },

  activated: function () {
    this.user.name = null
    this.user.email = null
    this.user.phone = null
    this.user.id = null
  },

  methods: {
    backToHomepage: function () {
      this.$router.push({
        path: '/'
      })
    },

    setFaceID: function () {
      var content = this
      this.axios.post('/api/user/register', {
        nickname: this.user.name,
        email: this.user.email,
        phoneNumber: this.user.phone
      })
      .then(function (res) {
        content.user.id = res.data
        content.$router.push({path: '/createFaceID'})
      })
    }
  }
}
</script>

<style scoped>
  .input-pane-wrapper {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .input-pane {
    width: 80%;
    height: 90%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;
    border: 1px solid #D7DDE4;
  }
  .input-wrapper {
    width: 80%;
    height: 30%;
    display: flex;
  }
  .label-wrapper {
    width: 20%;
    height: 100%;
    float: left;
    font-size: 12pt;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .inputter {
    width: 80%;
    height: 100%;
    float: left;
    font-size: 12pt;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-pane {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-pane-content {
    width: 80%;
    height: 80%;
  }
  .upper-button {
    font-size: 14pt;
    font-weight: bold;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lower-button {
    font-size: 14pt;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5A6A7A;
    color: white;
  }
</style>

