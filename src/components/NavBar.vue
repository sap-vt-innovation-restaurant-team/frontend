<template>
    <div class="header">
      <div class="header-logo" v-on:click="goToHomepage">
        <span style="color: white; font-size: 14pt; font-weight: bold; margin: 0 6px 0 0;">SAP SuccessRestaurants</span>
        <Icon type="ios-heart-outline" color="white" size="40" />
      </div>
      <div class="header-language">
        <div class="language-selector">
          <Icon type="ios-navigate" size="20" style="margin: 0 5px 0 0;" />
          English
        </div>
        <div class="language-selector">
          <Icon type="ios-navigate" size="20" style="margin: 0 5px 0 0;" />
          简体中文
        </div>
        <div class="language-selector">
          <Icon type="ios-navigate" size="20" style="margin: 0 5px 0 0;" />
          Português
        </div>
        <div class="language-selector">
          <Icon type="ios-navigate" size="20" style="margin: 0 5px 0 0;" />
          Deutsch
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    
    methods: {
        goToHomepage: function () {
            this.$router.push('/')
        }
    }
}
</script>

<style>
    .header {
        width: 100%;
        height: 10%;
        position: relative;
        display: flex;
        background-color: #4A5A7A;
        overflow: hidden;
        z-index: 10;
        box-shadow: 0 0px 50px black;
    }
    .header-logo {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 0 0 50px;
    }
    .header-logo:hover {
        cursor: pointer;
    }
    .header-language {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 20px 0 0;
    }
    .language-selector {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: lightgray;
        font-size: 12pt;
    }
    .language-selector:hover {
        color: white;
        transition: ease-in;
        transition-duration: 0.2s;
        cursor: pointer; 
    }
</style>
