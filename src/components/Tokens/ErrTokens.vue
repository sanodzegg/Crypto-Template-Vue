<script>
    import FooterComp from "@/components/FooterComp.vue"
    import { mapGetters } from "vuex";

    import { gsap } from "gsap";

    export default {
        components: { FooterComp },
        data() {
            return {
                statusCode: Number,
            }
        },
        computed: {
            ...mapGetters(["getSimilar"])
        },
        mounted: function() {
            this.statusCode = this.$route.params.statusCode;

            gsap.from(".error__wrapper", {
                opacity: 0,
                delay: .5,
                y: 100,
                scale: 0.7,
                duration: .3,
            });
            gsap.to(".error__wrapper", {
                opacity: 1,
                delay: .5,
                y: 0,
                scale: 1,
                duration: .3,
            });
        },
    }
</script>
<template>
    <div class="error__wrapper">
        <span>{{ statusCode }}</span>
        <h2>Page Not Found</h2>
        <section v-if="getSimilar.length > 0" class="suggestions__wrapper">
            <p>The page you're looking for can't be found. You can click one of the possible options below.</p>
            <div class="suggestions__grid">
                <p class="suggestions__grid-child" v-for="id in getSimilar" :key="id" @click="$router.push({path: `/tokens/${id}`})">{{ id }}</p>
            </div>
        </section>
        <section v-else class="error__section">
            <div class="goBack__buttons">
                <router-link to="/pricing"><button id="goPricing">View Pricing</button></router-link>
                or
                <router-link to="/"><button id="goHome">Go Home</button></router-link>
            </div>
        </section>
    </div>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>

<style scoped>
    .footer__section {
        margin-top: 0;
    }
</style>