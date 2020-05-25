<template>
    <div class="block-thumb">
        <div class="block-thumb__box">
            <div class="block-thumb__content">
                <div v-html="info.link"></div>
            </div>
        </div>
        <span class="block-thumb__title">
            {{ info.title }}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style scoped lang="scss">
.block-thumb {
    &__box {
        height: 0;
        padding-bottom: 64%;
        width: 100%;
        position: relative;
    }
    &__content {
        position: absolute;
        background-color: red;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        overflow: hidden;
    }
}
</style>
