<template>
    <div class="content-card">
        <div v-if="tableStatus === null" style="width: 100%; height: 100%; position: relative;">
            <div class="card-title" style="font-size: 30pt;">
                Got a desk No.?
            </div>
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
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
                <div class="button-panel" v-on:click="goBack">
                    Back
                </div>
            </div>
        </div>
        <div v-else-if="tableStatus === 'yes'" style="width: 100%; height: 100%; position: relative;">
            <div class="card-title" style="font-size: 30pt;">
                Please enter your desk No.
            </div>
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
                <div class="content-panel" style="margin: 5% 0 0 0;">
                    <div class="content-card customized">
                        <div class="card-title" style="font-size: 20pt;">
                            Enter it here
                        </div>
                        <div class="card-body">
                            <div class="image-wrapper">
                                <input v-model="tableNum" style="width: 100%; height: 100%; font-size: 100pt; text-align: center; border: none;" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-panel">
                    <div class="button-back" v-on:click="rechoose">
                        Back
                    </div>
                    <div class="button-proceed" v-on:click="proceed">
                        Proceed
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="tableStatus === 'no'" style="width: 100%; height: 100%; position: relative;">
            <div class="card-title" style="font-size: 30pt;">
                Let's get you a table
            </div>
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
                <div class="content-panel" style="margin: 5% 0 0 0;">
                    <div class="content-card customized">
                        <div class="card-title" style="font-size: 16pt;">
                            Please enter the number of people...
                        </div>
                        <div class="card-body">
                            <div class="image-wrapper">
                                <input v-model="cntPeople" style="width: 100%; height: 100%; font-size: 100pt; text-align: center; border: none;" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-panel">
                    <div class="button-back" v-on:click="rechoose">
                        Back
                    </div>
                    <div class="button-proceed" v-on:click="proceed">
                        Proceed
                    </div>
                </div>
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
            tableStatus: null,
            cntPeople: null,
            tableNum: null
        }
    },

    activated: function () {
        this.tableStatus = null
        this.cntPeople = null
        this.tableNum = null
    },

    methods: {
        haveTable: function () {
            this.tableStatus = 'yes'
        },

        noTable: function () {
            this.tableStatus = 'no'
        },

        goBack: function () {
            this.$router.push({
                path: '/'
            })
        },

        goToMenu: function () {
            this.$router.push({
                path: '/order'
            })
        },

        rechoose: function () {
            this.tableStatus = null
        },

        proceed: function () {
            this.goToMenu()
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
    background: #5A6A7A;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16pt;
    font-weight: bold;
}
.button-back {
    width: 50%;
    height: 100%;
    background: #7A8A8A;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16pt;
    font-weight: bold;
}
.button-proceed {
    width: 50%;
    height: 100%;
    background: #5A6A7A;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16pt;
    font-weight: bold;
}
.button-panel:hover {
    cursor: pointer;
    box-shadow: 0 0 5px lightgrey;
    border-color: #5A6A7A;
    background-color: white;
    color: #5A6A7A;
    transition: ease-in;
    transition-duration: 0.2s;
}
.button-back:hover {
    cursor: pointer;
    box-shadow: 0 0 5px lightgrey;
    border-color: #5A6A7A;
    background-color: white;
    color: #5A6A7A;
    transition: ease-in;
    transition-duration: 0.2s;
}
.button-proceed:hover {
    cursor: pointer;
    box-shadow: 0 0 5px lightgrey;
    border-color: #5A6A7A;
    background-color: white;
    color: #5A6A7A;
    transition: ease-in;
    transition-duration: 0.2s;
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
    align-items: center;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
}
</style>
