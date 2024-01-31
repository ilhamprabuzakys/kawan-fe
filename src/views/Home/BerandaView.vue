<script setup>
    import { IconLogout } from '@tabler/icons-vue';
</script>

<template>
    <div class="container col-xxl-8 px-4">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="/kawan.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="400"
                    loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Kawasan Rawan</h1>
                <p class="mt-3 mb-4">Merupakan aplikasi dari Direktorat Pemberdayaan Alternatif untuk <b>memonitoring</b>
                    kawasan BNNP
                    dan BNNK di
                    seluruh Indonesia beserta <b>status kerawanan</b> nya.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <router-link to="/accounts/login/" class="btn btn-success btn-md px-4">
                        <IconLogout class="me-1" :size="20" />
                        Kunjungi Kawan</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BerandaView",
};
</script >;