<template>
    <div class="comment__wrapper">
        <p class="comment__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</p>
        <div class="user__wrapper">
            <div class="user__image-wrap">
                <img v-bind:src="picture" alt="user image">
            </div>
            <p class="user__name">{{`${firstName} ${lastName}`}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        picture: String,
        firstName: String,
        lastName: String,
    }
}
</script>

<style scoped>
    .comment__wrapper {
        background-color: #282454;
        padding: 66px 45px;
        border-radius: 40px;
        width: 470px;
        margin-bottom: 50px !important;
    }
    .comment__text {
        font-size: 18px;
        text-align: start;
    }
    .user__wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30px;
    }
    .user__image-wrap {
        width: 46px;
        height: 46px;
    }
    .user__image-wrap img {
        border-radius: 50%;
        width: 100%;
        object-fit: contain;
        border: 7px solid #564FB4;
    }
    .user__name {
        margin-left: 30px;
        margin-top: 17px;
    }
</style>