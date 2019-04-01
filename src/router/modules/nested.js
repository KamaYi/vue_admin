const nestedRouter = {
    path: '/nested',
    component: resolve => require(['@/views/layout/layout.vue'], resolve),
    redirect: '/nested/menu1',
    name: 'nested',
    meta: {
        title: '机构',
    },
    children: [{
            path: 'menu1',
            component: () =>
                import ('@/views/nested/menu1/menu1'),
            name: 'Menu1',
            meta: { title: '页面一' },
        },
        {
            path: 'menu2',
            name: 'Menu2',
            component: () =>
                import ('@/views/nested/menu2/menu2'),
            meta: { title: '页面二' }
        },
        {
            path: 'menu3',
            name: 'Menu3',
            component: () =>
                import ('@/views/nested/menu3/menu3'),
            meta: { title: '页面三' }
        }
    ]
}

export default nestedRouter