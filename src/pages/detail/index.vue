<template>
    <div>
        <BlockThumb class="page-category__previews-item" :info="info" hide-title/>
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
            // this.items = info.items
            // this.title = info.title
        }
    }
</script>

<style scoped lang="">

</style>
