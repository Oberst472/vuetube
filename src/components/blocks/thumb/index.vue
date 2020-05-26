<template>
    <div class="block-thumb">
        <div class="block-thumb__wrap">
            <div class="block-thumb__box">
                <div class="block-thumb__content">
                    <div v-html="info.link"></div>
                </div>
            </div>
            <router-link v-if="!hideTitle" :to="{name: 'video', params: {videoid: info['translate_title'], info}}" class="block-thumb__title">
                {{ info.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: null
            },
            hideTitle: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
.block-thumb {
    &__wrap {
        background-color: rgba(179, 179, 179, 0.1);
        box-shadow: 0 0 16px 0 rgba(179, 179, 179, 0.6);
        border-radius: 10px;
        overflow: hidden;
    }
    &__box {
        height: 0;
        padding-bottom: 64%;
        width: 100%;
        position: relative;
    }
    &__content {
        position: absolute;
        background-color: rgba(179, 179, 179, 0.1);
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        overflow: hidden;
        &:before {
            content: 'Видео загружается...';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%);
            font-size: 12px;
            width: 100%;
            z-index: -1;
        }
        & > div {
            width: 100%;
            max-width: 100%;
            height: 100%;
            iframe {
                width: 100% !important;
                max-width: 100% !important;
                height: 100% !important;
            }
        }
    }
    &__title {
        background-color: rgba(179, 179, 179, 0.1);
        padding: 10px;
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: $color--text;
        transition-duration: 0.3s;
        &:hover {
            color: $color--positive
        }
    }
}
</style>
