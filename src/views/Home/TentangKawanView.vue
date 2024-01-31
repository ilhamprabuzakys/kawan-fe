<script setup>
import { IconLogout } from '@tabler/icons-vue';
</script>

<template>
    <section>
        <div class="container col-xxl-8 px-4">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-4">
                    <img src="/kawan.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500"
                        height="400" loading="lazy">
                </div>
                <div class="col-lg-8">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Apa Itu <span>Kawasan Rawan</span></h1>
                    <p class="mt-3 mb-4">Merupakan aplikasi dari Direktorat Pemberdayaan Alternatif untuk
                        <b>memonitoring</b>
                        kawasan BNNP
                        dan BNNK di
                        seluruh Indonesia beserta <b>status kerawanan</b> nya.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <router-link to="/accounts/login/" class="btn btn-success btn-md px-4">
                            <IconLogout class="me-1" :size="20" />
                            Kunjungi Kawan
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <hr class="my-4">

    <section class="mt-3">
        <div class="table-responsive">
            <table ref="provinceTable" id="__table_province" class="table table-bordered">
                <thead>
                    <tr class="bg-soft-success">
                        <th class="text-center">No</th>
                        <th>Kode Provinsi</th>
                        <th>Nama Provinsi</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Data dari API akan ditampilkan di sini -->
                    <tr v-for="(province, index) in provinces" :key="index">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td>{{ province.id }}</td>
                        <td>{{ province.nama_provinsi }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import "datatables.net/js/jquery.dataTables.js"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

import $ from "jquery";

export default {
    name: 'Tentang Kawan',
    data() {
        return {
            provinces: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await axios.get('http://103.210.54.17:8003/users/api/v1/provinces/');
            this.provinces = response.data;
            //this.initDataTable();

            setTimeout(() => {
                $('#__table_province').DataTable();
            }, 1000);
        },
    },
};
</script>

<style scoped>
.display-5 span {
    font-weight: 600;
    font-family: sans-serif;
}

.bg-soft-success th {
    background-color: #c8ffdc;
}
</style>