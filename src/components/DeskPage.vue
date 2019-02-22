<template>
    <div class="content-card">
        <div class="card-title">
            Got a desk No.?
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
            <p style="font-size: 18pt; display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                So that we can know whether to assign one to you...
            </p>
            <div class="content-panel">
                <div class="content-card customized" v-on:click="haveTable">
                    <div class="card-title" style="font-size: 20pt;">
                        YES
                    </div>
                    <div class="card-body">
                        <div class="image-wrapper">
                            <img :src="yesImg" style="width: 100%; height: auto;" />
                        </div>
                    </div>
                </div>
                <div class="content-card customized" v-on:click="noTable">
                    <div class="card-title" style="font-size: 20pt;">
                        NO
                    </div>
                    <div class="card-body">
                        <div class="image-wrapper">
                            <img :src="noImg" style="width: 100%; height: auto;" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-panel">
                Back
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeskPage',

    data () {
        return {
            yesImg: 'https://raw.githubusercontent.com/sap-vt-innovation-restaurant-team/backend/master/images/logo/hasDesk.png',
            noImg: 'https://raw.githubusercontent.com/sap-vt-innovation-restaurant-team/backend/master/images/logo/noDesk.png',
            tableStatus: null
        }
    },

    activated: function () {
        this.tableStatus = null
    },

    methods: {
        haveTable: function () {
            this.tableStatus = 'yes'
        },

        noTable: function () {
            this.tableStatus = 'no'
        }
    }
}
</script>

<style>
.content-panel {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.button-panel {
    width: 100%;
    height: 10%;
    /* margin: 10px 0; */
    background: #5A6A7A;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.back-button {
    width: 50%;
    height: 100%;
    font-size: 14pt;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5A6A7A;
    color: white;
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
