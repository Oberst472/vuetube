<template>
    <div class="page-main">
        <p class="page-main__text">{{ text.page_text }}</p>
        <div class="page-main__previews">
            <div class="page-main__previews-grid">
                <div class="page-main__previews-row">
                    <BlockThumb class="page-main__previews-item" v-for="(item, index) in thumbs" :key="index" :info="item">
                        {{ item }}
                    </BlockThumb>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pageThumbs from '@/mocks/page-thumbs'
    import text from '@/mocks/text'
    import BlockThumb from '@/components/blocks/thumb'
    export default {
        components: {
            BlockThumb
        },
        data() {
            return {
                text,
                thumbs: pageThumbs
            }
        }
    }
</script>

<style scoped lang="scss">
.page-main {
    &__previews {
        margin-top: 60px;
        overflow: hidden;
        &-grid {
            margin: 0 -30px;
        }
        &-row {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin-top: -30px;
            padding: 0 15px;
        }
        &-item {
            box-sizing: border-box;
            width: 33.33%;
            padding: 0 15px;
            margin-top: 30px;
        }
    }

}
</style>
