<template>
    <div v-if="currentTag >= 0" class="content-card">
        <div class="card-title" style="font-size: 26pt;">
            For better suggestions...
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
            <p style="font-size: 18pt; display: flex; align-items: center; justify-content: center; margin: 10px 0;">
                Do you like {{ tags[currentTag] }}?
            </p>
            <div class="content-panel">
                <div class="content-card customized" v-on:click="like">
                    <div class="card-title" style="font-size: 20pt;">
                        Certainly YES!
                    </div>
                    <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
                        <Icon type="ios-thumbs-up" size="120" />
                    </div>
                </div>
                <div class="content-card customized" v-on:click="dislike">
                    <div class="card-title" style="font-size: 20pt;">
                        Maybe Nah...
                    </div>
                    <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
                        <Icon type="ios-thumbs-down" size="120" />
                    </div>
                </div>
            </div>
            <div class="button-panel" v-on:click="skipToMenu">
                Skip
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreferencePage',

    data () {
        return {
            tags: [],
            currentTag: null,
            likes: [],
            cntLikes: null,
            dislikes: [],
            cntDislikes: null
        }
    },

    activated: function () {
        var context = this
        this.axios.get('/api/order/getAllTags')
        .then(function (res) {
            context.tags = res.data
            if (context.tags !== null) {
                context.currentTag = 0
                context.cntLikes = 0
                context.cntDislikes = 0
                context.likes = []
                context.dislikes = []
            }
        })
    },

    methods: {
        like: function () {
            this.likes[this.cntLikes] = this.tags[this.currentTag]
            this.cntLikes++
            if (this.tags !== null) {
                var limit = this.tags.length
                if (this.currentTag + 1 === limit) {
                    this.$router.push({
                        path: '/desk'
                    })
                } else {
                    this.currentTag++
                }
            }
        },

        dislike: function () {
            this.dislikes[this.cntDislikes] = this.tags[this.currentTag]
            this.cntDislikes++
            if (this.tags !== null) {
                var limit = this.tags.length
                if (this.currentTag + 1 === limit) {
                    this.$router.push({
                        path: '/desk'
                    })
                } else {
                    this.currentTag++
                }
            }
        },

        skipToMenu: function () {
            this.$router.push({
                path: '/desk'
            })
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
.button-panel:hover {
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
    color: brown;
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
