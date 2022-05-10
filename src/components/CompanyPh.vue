<template>
    <div class="company__wrapper">
        <img src="../assets/mockingdata/logos/logo1.svg" alt="company logo" class="company__logo">
        <img src="../assets/mockingdata/logos/logo2.svg" alt="company logo" class="company__logo">
        <img src="../assets/mockingdata/logos/logo3.svg" alt="company logo" class="company__logo">
        <img src="../assets/mockingdata/logos/logo4.svg" alt="company logo" class="company__logo">
        <img src="../assets/mockingdata/logos/logo5.svg" alt="company logo" class="company__logo">
    </div>
</template>

<style scoped>
    .company__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @keyframes img {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.97);
        }
        100% {
            transform: scale(1);
        }
    }
</style>