<script setup>
import { IconUsers, IconLogin, IconLogout } from '@tabler/icons-vue';

</script>
<template>
    <header class="mb-5">
        <nav class="navbar navbar-expand-lg navbar-dark bg-success" style="border-bottom: 5px solid #63ff9a;">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <IconUsers :size="20" class="me-2" />
                    <span class="logo-text">Kawasan Rawan</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Beranda</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/tentang-kawan">Info</router-link>
                        </li>
                        <li class="nav-item ms-2">
                            <router-link class="nav-link align-middle" to="/accounts/login">
                                <IconLogout :size="20" class="me-1" />
                                Masuk
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Header',
};
</script>
