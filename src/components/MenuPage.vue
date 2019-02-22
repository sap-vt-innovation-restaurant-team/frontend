<template>
  <div style="position: fixed; z-index: 100; background: white; display: flex; justify-content: space-evenly; align-items: center;">
    <video id="video" width="640" height="480" autoplay style="z-index: 1;"></video>
    <button id="snap" v-on:click="test">Snap Photo</button>
    <canvas id="canvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {
  name: 'MenuPage',
  data () {
    return {
      canvas: null,
      canvasContext: null,
      video: null,
      errBack: null
    }
  },

  activated: function () {
    var context = this

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 640,
        height: 480
      }
    })
    .then(function (mediaStream) {
      context.canvas = document.getElementById("canvas"),
      context.canvasContext = context.canvas.getContext("2d"), //getContext唯一合法值2d
      context.video = document.querySelector('video')
      context.video.srcObject = mediaStream
      context.video.onloadedmetadata = function (e) {
        context.video.play()
      }
    })
    .catch(function (err) {
      console.log(err.name + ': ' + err.message)
    })
  },

  deactivated: function () {
    this.video.srcObject.getTracks()[0].stop()
  },

  methods: {
    test: function () {
      this.canvasContext.drawImage(this.video, 0, 0, 640, 480)
      console.log(this.canvasContext)
      var image = new Image();
      image.src = this.canvas.toDataURL("image/png");
      console.log(image.src)
      
      this.axios.post('/api/fr/new', {
        id: 'test',
        img: image.src
      })
      .then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  * {
    padding:0px;
    margin:0px;
  }
</style>

