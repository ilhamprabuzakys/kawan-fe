import { createRouter, createWebHistory } from "vue-router";

import AppGuestLayout from '@/layouts/AppGuestLayout.vue';

const APP_NAME = 'Kawasan Rawan (KAWAN)';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Beranda",
            component: () => import("@/views/Home/BerandaView.vue"),
            meta: { layout: AppGuestLayout }
        },
        {
            path: "/accounts/login",
            name: "Masuk",
            component: () => import("@/views/Home/LoginView.vue"),
            meta: { layout: AppGuestLayout }
        },
        {
            path: "/tentang-kawan",
            name: "Tentang KAWAN",
            component: () => import("@/views/Home/TentangKawanView.vue"),
            meta: { layout: AppGuestLayout }
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});

router.beforeEach((to, from, next) => {
    document.title = `${to.name} - ${APP_NAME}`;
    next();
});

export default router;
