<template>
    <div class="page-detail">
        <h1 class="page-detail__title">{{ info.title }}</h1>
        <BlockThumb class="page-detail__video" :info="info" hide-title/>
    </div>
</template>

<script>
    import items from '@/mocks/items'
    import BlockThumb from '@/components/blocks/thumb'
    export default {
        components: {
            BlockThumb
        },
        data() {
            return {
                info: {}
            }
        },
        watch: {
            $route: {
                handler(val) {
                    console.log(66)
                    this.info = this.$route.params.info
                    console.log(val)
                }
            }
        },
        mounted() {
            const id = this.$route.params.id
            const videoId = this.$route.params.videoid
            console.log(id)
            let info = ''
            items.forEach(item => {
                if (item['translate_title'] === id) {
                    info = item
                }
                else {
                    item['subcats'].forEach(item => {
                        if (item['translate_title'] === id) {
                            info = item
                        }
                    })
                }
            })
            this.info = info.items.find(item => item['translate_title'] === videoId)
        }
    }
</script>

<style scoped lang="scss">
.page-detail {
    display: flex;
    flex-direction: column;
    &__title {

    }
    &__video {
        margin-top: 45px;
    }
}
</style>
