<script>
    import { mapGetters } from "vuex";
    import DisplayCart from "@/components/Pricing/DisplayCart.vue"
    export default {
        components: {
            DisplayCart
        },
        computed: {
            ...mapGetters(["itemsInCart"]),
        },
    }
</script>
<template>
    <nav class="navbar">
        <div class="navbar__l">
            <div class="navbar__logo">
                <router-link to="/"><img src="../assets/logo.svg" alt="site logo"></router-link>
            </div>
            <div class="navbar__hr"></div>
            <ul>
                <router-link to="/"><li>Home</li></router-link>
                <router-link to="/about"><li>About</li></router-link>
                <router-link to="/pricing"><li>Pricing</li></router-link>
                <router-link to="/tokens"><li>Tokens</li></router-link>
            </ul>
        </div>
        <div class="navbar__search">
            <input type="text" placeholder="Search for crypto coins">
        </div>
        <div class="navbar__r">
            <span @click="$store.commit('openCart')">cart ({{itemsInCart}})</span>
            <button>download app</button>
        </div>
    </nav>
    <router-view />
    <section v-if="$store.state.displayCart" class="display__cart">
        <DisplayCart />
    </section>
</template>
