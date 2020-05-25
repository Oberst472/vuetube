<template>
    <div class="page-category">
        <h1>Категория</h1>
        <div class="page-category__previews">
            <div class="page-category__previews-grid">
                <div class="page-category__previews-row">
                    <BlockThumb class="page-category__previews-item" v-for="(item, index) in items" :key="index" :info="item">
                        {{ item }}
                    </BlockThumb>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlockThumb from '@/components/blocks/thumb'
    export default {
        components: {
            BlockThumb
        },
        data() {
            return {
                items: []
            }
        },
        mounted() {
            console.log(this.$route.params.id)
        },
        beforeRouteLeave(to, from, next) {
            console.log(33)
            next()
        }
    }
</script>

<style scoped lang="scss">
    .page__category {
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
