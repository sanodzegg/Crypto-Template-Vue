<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    import { mapActions, mapGetters } from "vuex";

    import TeamComp from "../components/About/AboutTeamComp.vue";
    import CompanyPh from "@/components/CompanyPh.vue";
    import FooterComp from "@/components/FooterComp.vue";

    export default {
        data() {
            return {

            }
        },
        components: {
            TeamComp,
            CompanyPh,
            FooterComp
        },
        computed: {
            ...mapGetters(["aboutUsers"]),
        },
        methods: {
            ...mapActions(["getUsers"]),
            animate() {
                gsap.from("#aboutTopHeader", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                });
                gsap.to("#aboutTopHeader", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                });
                gsap.from("#aboutTopUT", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                    delay: .4,
                });
                gsap.to("#aboutTopUT", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .4,
                });
                gsap.from(".about__top-heading", {
                    y: 100,
                    opacity: 0,
                    scale: 0.6,
                    delay: .8,
                });
                gsap.to(".about__top-heading", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: .8,
                });
                gsap.from(".about__top-grid", {
                    y: 100,
                    opacity: 0,
                    scale: .9,
                    delay: 1,
                });
                gsap.to(".about__top-grid", {
                    scale: 1,
                    duration: .8,
                    opacity: 1,
                    y: 0,
                    delay: 1,
                });
                gsap.from(".mid__l", {
                    y: 200,
                    opacity: 0,
                });
                gsap.to(".mid__l", {
                    scrollTrigger: {
                        trigger: ".mid__above",
                        start: "-300px center",
                        end: "200px",
                    },
                    y:0,
                    opacity: 1,
                    duration: 1,
                });
                gsap.from(".mid__r", {
                    y: 200,
                    opacity: 0,
                });
                gsap.to(".mid__r", {
                    scrollTrigger: {
                        trigger: ".mid__above",
                        start: "-300px center",
                        end: "200px",
                    },
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: .3,
                });
                gsap.from(".mid__below-l", {
                    y: 200,
                    opacity: 0,
                });
                gsap.to(".mid__below-l", {
                    scrollTrigger: {
                        trigger: ".mid__below",
                        start: "-200px center",
                        end: "200px",
                    },
                    y:0,
                    opacity: 1,
                    duration: 1,
                });
                gsap.from(".mid__below-r", {
                    y: 200,
                    opacity: 0,
                });
                gsap.to(".mid__below-r", {
                    scrollTrigger: {
                        trigger: ".mid__below",
                        start: "-200px center",
                        end: "200px",
                    },
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: .3,
                });
                gsap.from(".about__team-wrapper", {
                    scale: .95,
                    opacity: 0,
                });
                gsap.to(".about__team-wrapper", {
                    scrollTrigger: {
                        trigger: ".about__team-wrapper",
                        start: "-300px center",
                        end: "-150px",
                        scrub: true,
                    },
                    opacity: 1,
                    scale: 1,
                });
            }
        },
        mounted:function() {
            this.getUsers();
            this.animate();
        },
    }
</script>

<template>
    <section class="about__top">
        <div class="about__top-header">
            <h1 id="aboutTopHeader">About Crypto</h1>
            <p id="aboutTopUT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada.</p>
        </div>
        <div class="about__top-wrapper">
            <div class="about__top-heading">
                <h2>What drives Crypto?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>
            <div class="about__top-grid">
                <div class="grid__child">
                    <div class="grid__child-logo">
                        <img src="@/assets/aboutview/open-source.svg" alt="topic icon">
                    </div>
                    <div class="grid__child-text">
                        <h3>open source</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                    </div>
                </div>
                <div class="grid__child">
                    <div class="grid__child-logo">
                        <img src="@/assets/aboutview/decentralized.svg" alt="topic icon">
                    </div>
                    <div class="grid__child-text">
                        <h3>decentralized</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                    </div>
                </div>
                <div class="grid__child">
                    <div class="grid__child-logo">
                        <img src="@/assets/aboutview/transparent.svg" alt="topic icon">
                    </div>
                    <div class="grid__child-text">
                        <h3>transparent</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                    </div>
                </div>
                <div class="grid__child">
                    <div class="grid__child-logo">
                        <img src="@/assets/aboutview/community-driven.svg" alt="topic icon">
                    </div>
                    <div class="grid__child-text">
                        <h3>community driven</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about__mid">
        <div class="mid__above">
            <div class="mid__l">
                <div id="text__wrapper">
                    <h2>Our mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                    <p>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                </div>
                <div id="text__wrapper">
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
                    <p>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                </div>
            </div>
            <div class="mid__r">
                <img src="@/assets/img/earth.png" alt="digital earth picture" class="mid__image">
            </div>
        </div>
        <div class="mid__below">
            <div class="mid__below-l">
                <h2>timeline</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div class="mid__below-r">
                <div class="timeline__wrapper">
                    <h1>2014</h1>
                    <h3>Infraestructure Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                    <hr>
                </div>
                <div class="timeline__wrapper">
                    <h1>2016</h1>
                    <h3>Initial Announcement</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                    <hr>
                </div>
                <div class="timeline__wrapper">
                    <h1>2018</h1>
                    <h3>Beta Release</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                    <hr>
                </div>
                <div class="timeline__wrapper">
                    <h1>2022</h1>
                    <h3>Official Launch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="user__section">
        <div class="user__section-head">
            <h2>our team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.</p>
        </div>
        <div class="about__team-wrapper">
            <TeamComp v-for="i in aboutUsers" :key="i" :image="i.picture" :firstName="i.firstName" :lastName="i.lastName"/>
        </div>
    </section>
    <section class="investors__section">
        <h2>Investors</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.</p>
        <CompanyPh />
    </section>
    <section class="footer__section">
        <FooterComp />
    </section>
</template>