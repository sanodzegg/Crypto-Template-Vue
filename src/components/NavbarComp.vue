<script>
    import { mapActions, mapGetters } from "vuex";
    import DisplayCart from "@/components/Pricing/DisplayCart.vue"

    export default {
        data() {
            return {
                searchTerm: "",
            }
        },
        components: {
            DisplayCart
        },
        computed: {
            ...mapGetters(["itemsInCart"]),
        },
        methods: {
            ...mapActions(["updateID"]),
            reset() {
                this.searchTerm = ""
            }
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
            <input type="text" placeholder="Search for crypto coins" v-model="searchTerm" @keyup.enter="$router.push({path: `/tokens/${searchTerm}`}); reset();">
        </div>
        <div class="navbar__r">
            <span @click="$store.commit('openCart')">cart ({{itemsInCart}})</span>
            <button>download app</button>
        </div>
        <div class="navbar__burger">
            <div class="burger__menu-wrapper">
                <div class="icon__row"></div>
                <div class="icon__row"></div>
                <div class="icon__row"></div>
            </div>
        </div>
    </nav>
    <router-view :key="$route.path"/>
    <section v-if="$store.state.displayCart" class="display__cart">
        <DisplayCart />
    </section>
</template>
