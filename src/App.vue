<template>
    <div id="app" ref="bodyPage">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
</template>


<script>
  export default {
    name: 'app',
    data:function(){
      return{
        clientHeight:'',
      }
    },
    mounted:function(){
      this.clientHeight = `${document.documentElement.clientHeight}`
      this.$refs.bodyPage.style.height = this.clientHeight + 'px'
      window.console.log("body totle height: "+this.clientHeight+'px')
      console.log(this.clientHeight)
    },
  }
</script>

<style>
  html,body{
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
    /*overflow: hidden;*/
  }
</style>


 <!--  // created:function(){
  //   this.axios.get('/api/user/test',{params: { id: 'xxxxxrewe'}})
  //     .then(response =>{
  //       console.log(response.data)
  //     })
  //     .catch(function(error){
  //       console.log(error)
  //     })
  // } -->
