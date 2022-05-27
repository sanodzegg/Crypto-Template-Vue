<script>
    export default {
        props: {
            image: String,
            firstName: String,
            lastName: String,
        }
    }
</script>

<template>
    <div class="about__team-wrapper-child">
        <div class="about__team-info">
            <img v-bind:src="image" alt="team member image">
            <h3>{{`${firstName} ${lastName}`}}</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur andipiscing elit. Mauris mi aliquet eget id bibendum risus. Velit fermentum mi proin sit morbi.</p>
            <div class="social__wrapper">
                <a href="https://www.facebook.com/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/facebook.svg" alt="facebook logo">
                    </div>
                </a>
                <a href="https://twitter.com/home" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/twitter.svg" alt="twitter logo">
                    </div>
                </a>
                <a href="https://www.linkedin.com/feed/" target="__blank">
                    <div class="social__icon">
                        <img src="@/assets/social/linkedin.svg" alt="linkedin logo">
                    </div>
                </a>
            </div>
    </div>
</template>

<style scoped>
    .about__team-info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .about__team-info img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 10px solid #574EB4;
    }
    .about__team-info h3 {
        font-size: 16px;
        line-height: 1.1em;
        color: #FFFFFF;
        text-transform: uppercase;
        margin-top: 20px;
        margin-left: 25px;
    }
    .about__team-wrapper-child p {
        font-size: 18px;
        line-height: 1.7em;
        width: 330px;
    }
    .social__wrapper {
        justify-content: start;
        margin-top: 20px;
    }
    .social__icon {
        margin: 0 5px !important;
    }
</style>