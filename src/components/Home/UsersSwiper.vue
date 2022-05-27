<script>
    import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import UserComment from './UserComment.vue';
    import { mapActions, mapGetters } from "vuex";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    SwiperCore.use([Autoplay]);

    export default {
        components: {
            Swiper,
            SwiperSlide,
            UserComment
        },
        computed: {
            ...mapGetters(["users"]),
        },
        methods: {
            ...mapActions(["getUsers"]),
        },
        mounted:function() {
            this.getUsers();
            gsap.to(".swiper__section", {
                scrollTrigger: {
                    trigger: ".swiper__section", 
                    start: "-200px center",
                    end: "200px",
                },
                opacity: 1,
                duration: 1,
            });
        },
        setup() {
                return {
                    modules: [Pagination, A11y],
                };
            },
        };
</script>

<template>
    <section class="swiper__section">
        <div class="swiper__heading">
            <h1>What our users say?</h1>
            <button>download app</button>
        </div>
        <swiper class="swiper__main"
        :modules="modules"
        :slides-per-view="2"
        :autoplay='{
            "delay": 3500,
            "disableOnInteraction": false
        }'
        :space-between="25"
        :pagination="{ clickable: true }"
        >
            <swiper-slide v-for="i in users" :key="i"><UserComment :picture="i.picture" :firstName="i.firstName" :lastName="i.lastName" /></swiper-slide>
        </swiper>
    </section>
</template>

<style>
    .swiper__section {
        margin-top: 150px;
        opacity: 0;
    }
    .swiper__heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .swiper__heading h1 {
        font-size: 42px;
        color: #ffffff;
    }
    .swiper__heading button {
        margin: 0 !important;
    }
    .swiper__main {
        margin-top: 30px;
    }
    .swiper-pagination {
        bottom: 0px !important;
    }
    .swiper-pagination-bullet-active {
        background-color: #ffffff !important;
        opacity: 1;
    }
    .swiper-pagination-bullet {
        background-color: #71707E;
        width: 15px;
        height: 15px;
        margin: 0 7px !important;
    }
    .swiper-slide {
        opacity: .5;
        transition: opacity .5s;
    }
    .swiper-slide-active {
        opacity: 1 !important;
    }
</style>