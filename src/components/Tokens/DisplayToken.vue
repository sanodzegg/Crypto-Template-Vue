<script>
    import axios from "axios";
    export default {
        data() {
            return {
                coinID: sessionStorage.getItem("coinID"),
                data: {},
                description: true,
                numParser: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
            }
        },
        methods: {
            getCoin(id) {
                axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
                    Object.assign(this.data, res.data);
                });
            }
        },
        beforeMount: function() {
            this.getCoin(this.coinID)
            console.log(this.data);
        },
    }
</script>

<template>
    <section class="token__display">
        <div class="token__info">
            <div class="info__row">
                <img v-bind:src="data.image.large" class="token__logo">
                <h1>{{ data.name }}</h1>
                <span class="token__initials">{{ data.symbol }}</span>
            </div>
            <div class="info__row desc">
                <p class="token__desc" v-if="description" @click="description = false">{{ data.description.en.slice(0, 77) + '...' }}</p>
                <p class="token__desc active" v-else>{{ data.description.en }}</p>
            </div>
            <div class="info__row links">
                <a v-bind:href="data.links.homepage[0]" target="_blank">Visit website</a>
                <a v-bind:href="data.links.homepage[0]" target="_blank">Whitepaper</a>
            </div>
            <div class="info__row market">
                <div class="market__info">
                    <p class="market__title">MARKET CAP</p>
                    <p class="market__digits">{{`$${data.market_data.market_cap.usd.toString().replace(numParser, ",")} USD`}}</p>
                </div>
                <div class="market__info">
                    <p class="market__title">VOLUME</p>
                    <p class="market__digits">{{`$${data.market_data.total_volume.usd.toString().replace(numParser, ",")} USD`}}</p>
                </div>
            </div>
        </div>
        <div class="about__token">
        </div>
    </section>
</template>