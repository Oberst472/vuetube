<template>
    <div class="page-category">
        <h1 class="page-category__title">
            {{ title }}
        </h1>
        <transition name="fade">
            <div class="page-category__previews" v-if="$route.name === 'category'">
                <div class="page-category__previews-grid">
                    <div class="page-category__previews-row">
                        <BlockThumb class="page-category__previews-item" v-for="item in items" :key="item.id" :info="item"/>
                    </div>
                </div>
            </div>
            <router-view v-else/>
        </transition>
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
                title: '',
                items: []
            }
        },
        watch: {
          $route: {
              handler(val) {
                  this.items = val.params.info.items
                  this.title = val.params.info.title
              }
          }
        },
        mounted() {
            const id = this.$route.params.id
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
            this.items = info.items
            this.title = info.title
        }
    }
</script>

<style scoped lang="scss">
    .page-category {
        &__title {
        }
        &__previews {
            overflow: hidden;
            &-grid {
                margin: 0 -30px;
            }
            &-row {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 15px;
            }
            &-item {
                box-sizing: border-box;
                width: 33.33%;
                padding: 0 15px;
                margin-top: 30px;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
