<script>
    export default {
        props: {
            type: String,
            cost: Number,
            description: String,
            features: Object,
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>
<template>
    <div class="plan__card">
        <div class="plan__ab">
            <div class="plan__type">
                <p>{{ type }}</p>
            </div>
            <h1 class="plan__cost">{{`$${cost}.00 USD`}}</h1>
            <p class="plan__description">{{ description }}</p>
        </div>
        <div class="plan__be">
            <h4>features</h4>
            <ul class="plan__list">
                <li v-for="i in features" :key="i">{{ i }}</li>
            </ul>
        </div>
        <div class="plan__buttons">
            <button class="plan__adc" @click="$store.commit('transferCart', this.type)">add to cart</button>
            <button class="plan__bn">buy</button>
        </div>
    </div>
</template>

<style scoped>
    .plan__card {
        background-color: #292554;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 48px 30px;
        border-radius: 40px;
        transition: all .3s ease-in-out;
    }
    .plan__card:hover {
        transform: scale(.97);
    }
    .plan__type {
        padding: 9px 14px;
        margin-bottom: 18px;
        background-color: #6738E4;
        border-radius: 30px;
        width: 55px;
        cursor: pointer;
    }
    .plan__type p {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 1.3em;
        font-weight: 500;
        color: #FFFFFF;
    }
    .plan__cost {
        margin-bottom: 5px;
        color: #FFFFFF;
        font-size: 42px;
        line-height: 1.3em;
    }
    .plan__description {
        font-size: 18px;
        width: 325px;
    }
    .plan__be {
        margin-top: 30px;
    }
    .plan__be h4 {
        line-height: 1.4em;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 23px;
        color: #FFFFFF;
    }
    ul {
        list-style: none;
        margin-left: 15px;
    }
    ul li::before {
        content: "\2022";
        color: #6639e4;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
    li {
        font-size: 18px;
        line-height: 1.1em;
        margin-bottom: 10px;
    }
    .plan__buttons {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .plan__buttons > button {
        padding: 20px 32px;
        font-size: 16px;
        font-weight: bold;
        color: #6639e4;
        background-color: #FFFFFF;
        text-transform: uppercase;
        outline: none;
        border: none;
        border-radius: 80px;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    .plan__buttons > button:nth-child(1) {
        color: #FFFFFF;
        background-color: #6639e4;
    }
    .plan__adc {
        margin-bottom: 20px;
    }
    .plan__adc:hover, .plan__bn:hover {
        background-color: #131128 !important;
        transform: scale(.97);
        color: #FFFFFF;
    }
</style>