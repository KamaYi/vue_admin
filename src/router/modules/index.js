import nestedRouter from './nested'

const indexRouter = [{
        path: '/',
        redirect: 'layout'
    }, {
        path: '/layout',
        component: () =>
            import ('@/views/layout/layout.vue'),
        name: 'layout',
        meta: {
            keepAlive: false,
            requireAuth: false
        },
        children: [{
            path: '',
            component: () =>
                import ('@/views/main/main.vue'),
            name: 'main',
            meta: { title: '首页' }
        }, ]
    },
    nestedRouter,
    {
        path: '/login',
        component: () =>
            import ('@/views/login/login.vue'),
        name: 'login',
    }, {
        path: '/notFound',
        component: () =>
            import ('@/views/404.vue'),
        name: 'notFound'
    },
    {
        path: '*',
        redirect: '/notFound'
    }
]

export default indexRouter