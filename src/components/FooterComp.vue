<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        mounted: function() {
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
        }
    }
</script>

<template>
    <div class="footer__wrapper">
        <div class="footer__up">
            <img src="@/assets/logo.svg" alt="site logo">
            <div class="social__wrapper">
                <a href="https://www.facebook.com/sanodzeg/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/facebook.svg" alt="facebook logo">
                    </div>
                </a>
                <a href="https://twitter.com/home" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/twitter.svg" alt="twitter logo">
                    </div>
                </a>
                <a href="https://www.instagram.com/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/instagram.svg" alt="instagram logo">
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/giorgi-sanodze-a6002821a/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/linkedin.svg" alt="linkedin logo">
                    </div>
                </a>
                <a href="https://www.youtube.com/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/youtube.svg" alt="youtube logo">
                    </div>
                </a>
                <a href="https://web.telegram.org/z/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/telegram.svg" alt="telegram logo">
                    </div>
                </a>
                <a href="https://www.whatsapp.com/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/whatsapp.svg" alt="whatsapp logo">
                    </div>
                </a>
            </div>
        </div>
        <div class="footer__mid">
            <div class="mid__l">
                <h2 class="menu__heading">menu</h2>
                <hr>
                <div class="mid__list-wrapper">
                    <ul>
                        <router-link to="/"><li>Home</li></router-link>
                        <router-link to="/about"><li>About</li></router-link>
                        <router-link to="/pricing"><li>Pricing</li></router-link>
                        <router-link to="/"><li>Pricing Single</li></router-link>
                        <router-link to="/"><li>Contact</li></router-link>
                    </ul>
                    <ul>
                        <router-link to="/"><li>Blog</li></router-link>
                        <router-link to="/"><li>Blog Post</li></router-link>
                        <router-link to="/tokens"><li>Tokens</li></router-link>
                        <router-link to="/"><li>Token Single</li></router-link>
                    </ul>
                </div>  
            </div>
            <div class="mid__r">
                <div class="dl__wrapper">
                    <h2>download our application</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer inoerer.</p>
                    <button id="appstore">app store</button>
                    <button id="pstore">play store</button>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <hr>
            <p class="copyright">Copyright © Crypto | Designed by <a href="https://brixtemplates.com/" target="__blank">BRIX Templates</a> - Clone built by <a href="https://github.com/sanodzegg" target="__blank">Giorgi Sanodze</a> Powered by <a href="https://webflow.com/" target="__blank">Webflow</a></p>
        </div>
    </div>
    <router-view />
</template>

<style scoped>
    .footer__wrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .footer__up, .footer__mid, .mid__list-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0;
        transform: scale(.95);
    }
    .footer__mid {
        margin-top: 85px;
    }
    h2 {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .menu__heading {
        margin-bottom: 30px;
    }
    .dl__wrapper {
        max-width: 510px;
        padding: 49px 34px;
        background-color: #3E3B6C;
        border-radius: 40px;
        max-width: 25rem;
    }
    .dl__wrapper h2 {
        margin-bottom: 8px;
    }
    .dl__wrapper p {
        margin-bottom: 27px;
    }
    .mid__l {
        width: 385px;
    }
    a, li {
        list-style: none;
        cursor: unset;
        text-decoration: none;
        margin: 10px 0;
    }
    .bold {
        font-weight: bold;
    }
    li:hover {
        color:#6639E4;
        transition: color .2s ease-in-out;
        cursor: pointer;
    }
    .footer__bottom {
        opacity: 0;
    }
    .footer__bottom hr {
        width: 95%;
        opacity: .3;
        margin: 100px 0 32px 0;
    }
    .copyright {
        text-align: center;
    }
    .copyright a {
        color: #FFFFFF;
        cursor: pointer;
        text-decoration: underline;
    }
    .copyright a:hover {
        transition: color .2s ease-in-out;
        color: #6639E4;
    }
</style>