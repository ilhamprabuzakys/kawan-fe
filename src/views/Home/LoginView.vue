<script setup>
import { IconUser, IconLock, IconEye, IconEyeClosed, IconLogout } from '@tabler/icons-vue';
</script>
<template>
    <section class="container px-5">
        <form action="" method="post">
            <img class="mb-4" src="/kawan.png" alt="" width="72">
            <h1 class="h3 mb-3 fw-normal">Silahkan masuk</h1>
            <p class="text-muted mb-3">Masuk ke aplikasi <b>KAWAN</b> dengan menggunakan akun <b>webmail BNN</b> anda!</p>

            <div class="input-group mb-3">
                <span class="input-group-text">
                    <IconUser :size="20" />
                </span>
                <input type="text" class="form-control" placeholder="Nama Pengguna Anda" id="username" name="username">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">
                    <IconLock :size="20" />
                </span>
                <input :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="*****" id="password"
                    name="password">
                <span class="input-group-text" @click="showPassword = !showPassword">
                    <IconEye :size="20" v-if="!showPassword" />
                    <IconEyeClosed :size="20" v-if="showPassword" />
                </span>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" name="remember-me" value="remember-me"
                    id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Ingat saya
                </label>
            </div>

            <button class="btn btn-success w-100 py-2" type="submit">
                <IconLogout :size="20" class="me-2" /> Masuk</button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2024 - Direktorat Pemberdayaan Alternatif</p>
        </form>
    </section>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false
        };
    }
};
</script>
<style scoped>
.input-group-text {
    height: 37.4px;
}
</style>