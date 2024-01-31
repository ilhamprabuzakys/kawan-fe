<script setup>
import Header from '@/layouts/partials/Header.vue';
</script>

<template>
    <Header />

    <main class="mt-5">
        <div class="container">
            <slot />
        </div>
    </main>
</template>
