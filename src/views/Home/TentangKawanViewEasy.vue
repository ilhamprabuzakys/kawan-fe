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
            <EasyDataTable :headers="headers" :items="items" />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


export default {
    name: 'Tentang Kawan',
    components: {
        EasyDataTable: Vue3EasyDataTable
    },
    data() {
        return {
            provinces: [],
            table: null,
            headers: [
                { text: "Name", value: "name" },
                { text: "Height (cm)", value: "height", sortable: true },
                { text: "Weight (kg)", value: "weight", sortable: true },
                { text: "Age", value: "age", sortable: true }
            ],

            items: [
                { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
                { "name": "James", "height": 180, "weight": 75, "age": 21 },
                { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
            ],
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
        },
    },
};
</script>

<style scoped>
@import 'datatables.net-bs5';

.display-5 span {
    font-weight: 600;
    font-family: sans-serif;
}

.bg-soft-success th {
    background-color: #c8ffdc;
}
</style>