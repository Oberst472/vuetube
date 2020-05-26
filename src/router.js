import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: require('./layouts/main').default,
            children: [
                {
                    path: '/',
                    name: 'main',
                    components: {
                        header: require('./components/sections/header').default,
                        footer: require('./components/sections/footer').default,
                        default: require('./pages/main').default
                    },
                    meta: {
                        title: `Главная`
                    }
                },
                {
                    path: '/:id',
                    name: 'category',
                    components: {
                        header: require('./components/sections/header').default,
                        footer: require('./components/sections/footer').default,
                        default: require('./pages/detail-category').default
                    },
                    meta: {
                        title: `Детальная`
                    }

                },
                {
                    path: ':id/:videoid',
                    name: 'video',
                    components: {
                        header: require('./components/sections/header').default,
                        footer: require('./components/sections/footer').default,
                        default: require('./pages/detail').default
                    },
                    meta: {
                        title: `Детальное видео`
                    }
                }
            ]
        }
    ]
})
