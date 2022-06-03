<script>
    import axios from "axios";
    import FooterComp from "@/components/FooterComp.vue";
    import router from "@/router/index.js";

    import { mapActions } from "vuex";

    import { gsap } from "gsap";

    export default {
    data() {
        return {
            coinID: "",
            data: {},
            description: true,
            numParser: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
            parsedDescription: "",
        };
    },
    methods: {
        parseId() {
            this.coinID = this.$route.params.id;
        },
        getCoin(id) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
                Object.assign(this.data, res.data);
                this.parsedDescription = res.data.description.en;
            }).catch(err => {
                if(err) {
                    router.push({path: `/tokens/notFound/${err.response.status}`});
                    this.getSimilar(id);
                }
            });
        },
        parseDesc(text) {
            return text != "" ? text.slice(0, 155)+"..." : "No description found."
        },
        normalDesc(text) {
            return text != "" ? text : "No description found."
        },
        ...mapActions(["getSimilar"]),
    },
    beforeMount: function () {
        this.parseId();
    },
    mounted: function() {
        this.getCoin(this.coinID);
        gsap.from(".token__display", {
            y: 100,
            opacity: 0,
            scale: 0.6,
            delay: .5,
            duration: 1,
        });
        gsap.to(".token__info", {
            y: 0,
            opacity: 1,
            scale: 1,
            delay: .5,
            duration: 1,
        })
    },
    components: { FooterComp }
}
</script>

<template>
    <section class="token__display">
        <div class="token__info">
            <div class="info__row">
                <img v-bind:src="data.image?.large" class="token__logo">
                <h1>{{ data.name }}</h1>
                <span class="token__initials">{{ data.symbol }}</span>
            </div>
            <div class="info__row desc">
                <p class="token__desc" v-if="description" @click="description = false" v-html="parseDesc(parsedDescription)"></p>
                <p class="token__desc active" v-else v-html="normalDesc(parsedDescription)"></p>
            </div>
            <div class="info__row links">
                <a v-bind:href="data.links?.homepage[0]" target="_blank">Visit website</a>
                <a v-bind:href="data.links?.homepage[0]" target="_blank">Whitepaper</a>
            </div>
            <div class="info__row market">
                <div class="market__info">
                    <p class="market__title">MARKET CAP</p>
                    <p class="market__digits">{{`$${data.market_data?.market_cap.usd.toString().replace(numParser, ",")} USD`}}</p>
                </div>
                <div class="market__info">
                    <p class="market__title">VOLUME</p>
                    <p class="market__digits">{{`$${data.market_data?.total_volume.usd.toString().replace(numParser, ",")} USD`}}</p>
                </div>
            </div>
        </div>
        <div class="token__divider">
            <hr>
        </div>
        <div class="about__token">
            <h2>{{`About ${data.name}`}}</h2>
            <p class="about__token" v-html="normalDesc(parsedDescription)"></p>
            <h2>{{`Why purchase ${data.name}?`}}</h2>
            <p class="about__token" v-html="normalDesc(parsedDescription)"></p>
        </div>
    </section>
    <router-view :key="$route.path"/>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>