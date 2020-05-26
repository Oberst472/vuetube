<template>
    <section class="section-header">
        <div class="wrap">
            <div class="section-header__content">
                <router-link class="section-header__logo" :to="{name: 'main'}">
                    <img alt="" class="" src="@/assets/images/logo.png">
                </router-link>
                <div class="section-header__search">
                    <BlockSearch/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlockSearch from '@/components/blocks/search'

    export default {
        components: {
            BlockSearch
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .section-header {
        background-color: #fafafa;
        border-bottom: 1px solid $color--border;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .12);
        &__content {
            @include adaptiveFont(15px, 33px);
            display: flex;
            align-items: center;
            flex-direction: column;
            min-height: 100px;
            padding: 10px 0;
            @include lg() {
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
            }
        }

        &__logo {
            display: inline-flex;
            flex-shrink: 0;
            width: 70px;
            @include lg() {
                width: 120px;
            }
            img {
                max-width: 100%;
            }
        }

        &__search {
            flex-shrink: 0;
            width: 100%;
            margin-top: 10px;
            @include lg() {
                display: inline-flex;
                width: 450px;
                height: 40px;
                margin-top: 0;
                margin-left: 5%;
            }
        }

        &__options {
            display: inline-flex;
            justify-content: space-between;
            flex-shrink: 0;
            width: 100%;
            margin-top: 10px;
            @include lg() {
                width: 250px;
                margin-top: 0;
                margin-left: auto;
            }

            &-btn {
                width: 48%;
            }
            &-info {
                justify-content: flex-end;
                @include lg() {
                    justify-content: space-between;
                }
            }
        }

        &__name {
            display: inline-flex;
            align-items: center;
            font-size: 12px;
        }

    }
</style>
