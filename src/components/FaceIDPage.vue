<template>
  <div class="content-card">
    <div class="card-title">
      SMILE!
    </div>
    <div class="card-body">
      <div class="camera-wrapper">
        <div class="camera">
          <video id="video" width="100%" height="100%" autoplay />
          <canvas id="canvas" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></canvas>
        </div>
      </div>
      <div class="button-pane-wrapper">
        <ButtonGroup style="width: 80%; height: 30%; margin: 1% 0; display: flex; align-items: center; justify-content: center;">
          <Button class="upper-button" shape="circle" v-on:click="shoot">
            <!-- Order without logging in -->
            <Icon type="ios-camera" :size="50" />
          </Button>
        </ButtonGroup>
        <ButtonGroup style="width: 80%; height: 30%; margin: 1% 0; display: flex; align-items: center; justify-content: center;">
          <Button class="lower-button" v-on:click="backToRegister">
            <Icon type="ios-arrow-back" />
            Back
          </Button>
          <Button class="lower-button" v-on:click="retry">
            Retry
          </Button>
          <Button class="lower-button" v-on:click="createFaceID">
            Proceed
            <Icon type="ios-arrow-forward" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaceIDPage',

  data () {
    return {
      mode: null,
      canvas: null,
      canvasContext: null,
      video: null,
      errBack: null
    }
  },
  
  activated: function () {
    if (this.$route.name === 'createFaceID') {
      this.mode = 'create'
    } else {
      this.mode = 'check'
    }
    this.startShooting()
  },

  deactivated: function () {
    this.video.srcObject.getTracks()[0].stop()
  },

  methods: {
    startShooting: function () {
      var context = this
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 1920,
          height: 1080
        }
      })
      .then(function (mediaStream) {
        context.canvas = document.getElementById("canvas"),
        context.canvasContext = context.canvas.getContext("2d"), //getContext唯一合法值2d
        context.video = document.querySelector('video')
        context.video.srcObject = mediaStream
        context.video.onloadedmetadata = function (e) {
          context.video.play()
          context.canvas.width = context.video.width
          context.canvas.height = context.video.height
          context.canvas.x = context.video.x
          context.canvas.y = context.video.y
          console.log('(' + context.canvas.width + ', ' + context.canvas.height + '), (' + context.video.x + ', ' + context.video.y + ')')
        }
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message)
      })
    },

    backToRegister: function () {
      if (this.$route.name === 'createFaceID') {
        this.$router.push({
          path: '/register'
        })
      } else if (this.$route.name === 'checkFaceID') {
        this.$router.push({
          path: '/'
        })
      }
    },

    shoot: function () {
      this.canvasContext.drawImage(this.video, 0, 0)
      this.video.srcObject.getTracks()[0].stop()
    },

    retry: function () {
      this.startShooting()
    },

    createFaceID: function () {
      if (this.$route.name === 'createFaceID') {
        this.$router.push({
          path: '/preference'
        })
      } else if (this.$route.name === 'checkFaceID') {
        this.$router.push({
          path: '/desk'
        })
      }
    }
  }
}
</script>

<style scoped>
  .camera-wrapper {
    width: 100%;
    height: 60%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .camera {
    width: 80%;
    height: 95%;
    border-radius: 4px;
    position: relative;
  }
  .button-pane-wrapper {
    width: 100%;
    height: 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-pane-content {
    width: 80%;
    height: 80%;
    background: yellow;
  }
  .shoot-button-wrapper {
    width: 100%;
  }
  .lower-button {
    font-size: 14pt;
    font-weight: bold;
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upper-button {
    font-size: 14pt;
    font-weight: bold;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5A6A7A;
    color: white;
  }
</style>

