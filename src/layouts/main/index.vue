<template>
    <div class="layout">
        <header class="layout__header">
            <router-view name="header"/>
        </header>
        <main class="layout__main">
            <div class="wrap">
                <div class="layout__main-content">
                    <aside class="layout__aside">
                        <SectionAside/>
                    </aside>
                    <section class="layout__content">
                        <transition name="fade" mode="out-in">
                            <router-view/>
                        </transition>
                    </section>
                </div>
            </div>
        </main>
        <footer class="layout__footer">
            <router-view name="footer"/>
        </footer>
    </div>
</template>

<script>
import SectionAside from '@/components/sections/aside'
    export default {
        components: {
            SectionAside
        }
    }
</script>

<style lang="scss">
    .layout {
        width: 100%;
        display: flex;
        flex-direction: column;
        &__header {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
        }
        &__main {
            flex-grow: 1;
            box-sizing: border-box;
            display: flex;
            .wrap {
                display: flex;
            }
            &-content {
                width: 100%;
                display: grid;
                grid-template-columns: 200px 1fr;
            }
        }
        &__footer {}
        &__aside {
            background-color: rgba(179, 179, 179, 0.1);
        }
        &__content {
            padding-left: 30px;

        }
    }
</style>
