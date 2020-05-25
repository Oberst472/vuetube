<template>
    <div class="block-list-item" @mouseleave="isActive = false">
        <span class="block-list-item__link" @click="click"
        >
            {{ info.title }}
        </span>
        <UiTransition>
            <ul class="block-list-item__sublist" v-if="isActive">
                <router-link
                    :to="{name: 'category', params: {id: item['translate_title'], info: item.items}}"
                    class="block-list-item__subitem"
                    v-for="(item, index) in info['subcats']"
                    :key="index"
                >
                    {{ item.title }}
                </router-link>
            </ul>
        </UiTransition>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            tag() {
                return !this.info.items.length ? 'span' : 'router-link'
            }
        },
        methods: {
            click() {
                if (this.tag === 'router-link') {
                    this.$router.push({name: 'category', params: {id: this.info['translate_title'], info: this.info.items}})
                }
                else {
                    this.isActive = true

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-list-item {
        &__link {
            display: block;
            padding: 15px;
            text-decoration: none;
            color: $color--text;
            transition-duration: 0.3s;
            cursor: pointer;
            &:hover {
                background-color: #fff;
            }
        }
        &__sublist {
            margin: 0;
            list-style: none;
            overflow: hidden;
            text-align: left;
            padding: 0;
        }
        &__subitem {
            cursor: pointer;
            display: block;
            text-decoration: none;
            box-sizing: border-box;
            padding: 15px;
            text-align: left;
            color: $color--positive;
            &:hover {
                background-color: #fff;
            }
        }
    }
</style>
