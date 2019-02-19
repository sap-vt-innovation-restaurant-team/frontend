<template>
  <div id="userdistinguish">
    <div id="left" v-on:click="$router.push('/register')">
      <div id="imgleft"></div>
      <p id="wordleft">New Customers and Register</p>
    </div>
    <div id='right' v-on:click="$router.push('/facerecognition')">
      <div id="imgright"></div>
      <p id="wordright">VIP and Login In</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDistinguish',
}
</script>

<style scoped>
  *{
    padding:0px;
    margin:0px;
  }
  #userdistinguish{
    height: 100%;
    width: 100%;
  }
  #left{
    float: left;
    background-color: rgb(183,196,213);
    height: 100%;
    width: 50%;
  }
  #right{
    float: left;
    background-color: rgb(168,205,216);
    height:100%;
    width: 50%;
  }
  #imgleft{
    position: relative;
    left: 30%;
    top: 15%;
    background-color: rgb(249,249,249);
    width:40%;
    height: 40%;
  }
  #imgright{
    position: relative;
    left: 30%;
    top: 15%;
    background-color: rgb(249,249,249);
    width:40%;
    height: 40%;
  }
  #wordleft{
    position: relative;
    left: 25%;
    top: 20%;
    font-size: 2em;
  }
  #wordright{
    position: relative;
    left: 35%;
    top: 20%;
    font-size: 2em;
  }
</style>

