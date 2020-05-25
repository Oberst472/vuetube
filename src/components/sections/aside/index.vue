<template>
    <ul class="section-aside">
        <li class="section-aside__item" v-for="item in categories" :key="item.id">
            <BlockItem :info="item"/>
        </li>
    </ul>
</template>

<script>
    import items from '@/mocks/items'
    import BlockItem from './item'
    export default {
        components: {
            BlockItem
        },
        data() {
            return {
                categories: items
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
.section-aside {
    margin: 0;
    padding: 0;
    list-style: none;
    &__item {
        border-bottom: 1px solid $color--border;
        text-align: left;
    }
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
