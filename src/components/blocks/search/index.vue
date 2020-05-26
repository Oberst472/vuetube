<!--eslint-disable-->
<template>
    <div class="block-search">
        <input class="block-search__inp" type="text" placeholder="Введите название видео" v-model="value">
       <transition name="fade">
           <div class="block-search__result" v-if="isActive" @click="isActive = false">
               <router-link :to="{name: 'video', params: {id: item.cat_title, videoid: item.translate_title, info: item}}" class="block-search__result-item" v-for="(item, index) in results" :key="index">
                   {{ item.title }}
               </router-link>
               <span v-if="!results.length">Ничего не найдено</span>
           </div>
       </transition>
    </div>
</template>

<script>
    import items from '@/mocks/items'
    export default {
        data() {
            return {
                value: '',
                results: [],
                isActive: false
            }
        },
        watch: {
            value(val) {
                !val.length ? this.isActive = false : this.isActive = true
                let arr = []
                items.forEach(item => {
                    arr.push(...item.items, ...item['subcats'])
                })
                let arr2 = arr.flat()
                let arr1 = arr2.filter(item => !item.items)
                arr2.forEach(item => {
                    if (item.items) {
                        arr1.push(item.items)
                    }
                })
                let arr3 = arr1.flat()
                this.results = arr3.filter(item => item.title.toLowerCase().indexOf(val.toLowerCase()) > -1)
            },
            $route: {
                handler() {
                    this.isActive = false
                    this.value = ''
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .block-search {
        display: inline-flex;
        width: 100%;
        position: relative;

        &__inp {
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            padding: 10px;
            border: 1px solid #e4e4e4;
            border-radius: 5px;
            outline: none;
            transition-duration: 0.3s;

            &:hover {
                border-color: $color--accent;
            }

            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }

        }
        &__result {
            position: absolute;
            top: calc(100% + 15px);
            left: 0;
            width: 100%;
            background-color: rgb(242, 242, 242);
            box-shadow: 0 0 16px 0 rgb(226, 226, 226);
            border-radius: 10px;
            z-index: 20;
            max-height: 200px;
            overflow-y: auto;
            &-item {
                cursor: pointer;
                padding: 7.5px 15px;
                box-sizing: border-box;
                font-size: 14px;
                text-align: left;
                display: block;
                text-decoration: none;
                color: $color--text;
                transition-duration: 0.3s;
                &:hover {
                    background-color: #fff;
                    color: $color--positive
                }
            }
            span {
                display: block;
                padding: 30px 15px;
                font-size: 14px;
                text-align: left;
            }
        }
    }
</style>
