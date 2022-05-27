<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import CompanyPh from '@/components/CompanyPh.vue';
    import AboutCrypto from "@/components/Home/AboutCrypto.vue";
    import CryptoSub from "@/components/Home/CryptoSub.vue";
    import UsersSwiper from "@/components/Home/UsersSwiper.vue";
    import FooterComp from "@/components/FooterComp.vue";
    
    gsap.registerPlugin(ScrollTrigger);
    export default {
        components: {
            CompanyPh,
            AboutCrypto,
            CryptoSub,
            UsersSwiper,
            FooterComp,
        },
        data() {
            return {
            }
        },
        mounted:function() {
            this.animate();
        },
        methods: {
            animate() {
                gsap.from("#topHeader", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                });
                gsap.to("#topHeader", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                });
                gsap.from("#topUT", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                    delay: .4,
                });
                gsap.to("#topUT", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .4,
                });
                gsap.from("#topBtns", {
                    opacity: 0,
                    y: 100,
                    delay: .8,
                });
                gsap.to("#topBtns", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .8,
                });
                gsap.from([".laptop__img", ".phone__img"], {
                    y: 100,
                    opacity: 0,
                    delay: .8,
                });
                gsap.to([".laptop__img", ".phone__img"], {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .8,
                });
                gsap.to(".laptop__img", {
                    scrollTrigger: {
                        trigger: ".laptop__img",
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    yPercent: -5,
                    duration: 1,
                });
                gsap.to(".phone__img", {
                    scrollTrigger: {
                        trigger: ".laptop__img",
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    yPercent: 5,
                    duration: 1,
                });
                gsap.from(".mid__grid-wrapper", {
                    scale: .95,
                    opacity: 0,
                });
                gsap.to(".mid__grid-wrapper", {
                    scrollTrigger: {
                        trigger: ".mid__grid-wrapper", 
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                });
                gsap.from("#midPhone1", {
                    rotate: -5,
                });
                gsap.to("#midPhone1", {
                    scrollTrigger: {
                        trigger: "#midPhone1", 
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    opacity: 1,
                    rotate: -10,
                    duration: 1,
                });
                gsap.from("#midPhone2", {
                    rotate: 5,
                });
                gsap.to("#midPhone2", {
                    scrollTrigger: {
                        trigger: "#midPhone2", 
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    duration: 1,
                    opacity: 1,
                    rotate: 10,
                });
                gsap.from(".subsect__l", {
                    y: 100,
                });
                gsap.to(".subsect__l", {
                    scrollTrigger: {
                        trigger: ".subsect__l", 
                        start: "-200px center",
                        end: "200px",
                        scrub: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                });
            }
        }
    }
</script>

<template>
    <section class="top__section">
        <div class="top__above">
            <h1 id="topHeader">Buy and trade cryptos like never before.</h1>
            <p id="topUT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
            <div class="top__above__btn" id="topBtns">
                <button class="dl__btn">Download App</button>
                <button class="pricing__btn">View Pricing</button>
            </div>
        </div>
        <div class="top__below">
            <img class="laptop__img" src="../assets/img/laptop.png" alt="laptop image">
            <img class="phone__img" src="../assets/img/phone.png" alt="phone image">
        </div>
        <div class="top__section-footer">
            <div class="company__wrapper">
                <p>Crypto App has been featured on</p>
                <CompanyPh />
            </div>
        </div>
    </section>
    <section class="mid__section">
        <AboutCrypto />
        <CryptoSub />
        <UsersSwiper />
    </section>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>