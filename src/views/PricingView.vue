<script>
    import PlanComp from "@/components/PlanComp.vue"
    import FooterComp from "@/components/FooterComp.vue"
    import plans from "@/assets/mockingdata/plans.json"

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger"
    gsap.registerPlugin(ScrollTrigger);

    import { cardData } from "@/components/PlanComp.vue"

    export default {
        components: {
            PlanComp,
            FooterComp
        },
        data() {
            return {
                planCards: {},
                cartCards: [],
            }
        },
        mounted: function() {
            this.planCards = plans;
            this.animate();
        },
        methods: {
            animate() {
                gsap.from(".pricing__title", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                });
                gsap.to(".pricing__title", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                });
                gsap.from(".pricing__par", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                    delay: .4,
                });
                gsap.to(".pricing__par", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .4,
                });
                gsap.from(".pricing__top-flex", {
                    y: 100,
                    opacity: 0,
                    delay: .6,
                });
                gsap.to(".pricing__top-flex", {
                    y: 0,
                    opacity: 1,
                    delay: .6,
                    duration: .8,
                });
                gsap.from(".pricing__cards", {
                    y: 100,
                    opacity: 0,
                    delay: .8,
                });
                gsap.to(".pricing__cards", {
                    y: 0,
                    opacity: 1,
                    delay: .8,
                    duration: .8,
                });
                gsap.to(".footer__up", {
                    scrollTrigger: {
                        trigger: ".footer__up", 
                        start: "-50px center",
                        end: "200px",
                    },
                    opacity: 1,
                    scale: 1,
                    duration: .6,
                });
                gsap.to([".footer__mid", ".mid__list-wrapper", ".footer__bottom"], {
                    scrollTrigger: {
                        trigger: ".footer__mid", 
                        start: "-50px center",
                        end: "200px",
                    },
                    opacity: 1,
                    scale: 1,
                    duration: .6,
                    delay: .6,
                });
            },
            createCart() {
                console.log(cardData.typeProp);
            }
        }
    }
</script>

<template>
    <section class="pricing__top">
        <h1 class="pricing__title">
            Pricing
        </h1>
        <p class="pricing__par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque</p>
        <div class="pricing__top-flex">
            <div class="pricing__top-child">
                <div class="svg__wrapper">
                    <img src="../assets/swap.svg" alt="send and receive icon">
                </div>
                <h1>send & receive</h1>
            </div>
            <div class="pricing__top-child">
                <div class="svg__wrapper">
                    <img src="../assets/chart.svg" alt="chart icon">
                </div>
                <h1>Trading Charts</h1>
            </div>
            <div class="pricing__top-child">
                <div class="svg__wrapper">
                    <img src="../assets/wallet.svg" alt="wallet icon">
                </div>
                <h1>wallet</h1>
            </div>
            <div class="pricing__top-child">
                <div class="svg__wrapper">
                    <img src="../assets/trade.svg" alt="trading icon">
                </div>
                <h1>Real Time Trading</h1>
            </div>
        </div>
    </section>
    <section class="pricing__cards">
        <PlanComp v-for="i in planCards" :key="i" :type="i.type" :cost="i.cost" :description="i.description" :features="i.features" />
    </section>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>