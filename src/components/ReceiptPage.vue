<template>
    <div class="content-card">
        <div class="card-title" style="font-size: 26pt">
            Please take the printed receipt!
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
            <div class="content-panel" style="margin: 5% 0 0 0;">
                <div class="content-card customized">
                    <div class="card-title" style="font-size: 20pt;">
                        Receipt
                    </div>
                    <div class="card-body">
                        <div class="image-wrapper">
                            <span style="width: 100%; height: 100%; margin: 5% 0; font-size: 16pt; text-align: center; border: none; display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
                                <span>Order Number: 12</span>
                                <span>Desk Number: 32</span>
                                <span>Name: Emoin</span>
                                <div style="font-size: 14pt; width: 70%; height: 60%; border: 1px solid lightgrey; text-align: left; padding: 10px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; margin: 10px;">
                                    <span>1. Chicken: 10€</span>
                                    <span>2. Beer: 10€</span>
                                    <span>3. Cabage: 10€</span>
                                </div>
                                <span>Total Cost: 30€</span>
                                <span>Date Time: 22/02/2019 14:00:00</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-panel" v-on:click="finish">
                Finish
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReceiptPage',

    methods: {
        finish: function () {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style scoped>
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
}
</style>
