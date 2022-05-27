<template>
    <section class="mid__subsect">
        <div class="subsect__l">
            <img id="midPhone1" src="../../assets/img/phone3.png" alt="mobile app picture">
            <img id="midPhone2" src="../../assets/img/phone4.png" alt="mobile app crypto transaction picture">
        </div>
        <div class="subsect__r">
            <h1>A crypto wallet from the future</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet consectetur eget suspendisse in. Adipiscing vitae dignissim facilisi ut.</p>
            <div class="subsect__r-wrapper">
                <div class="subsect__svg-wrapper">
                    <img src="../../assets/fees.svg" alt="fees logo">
                </div>
                <p>Lowest fees in market</p>
            </div>
            <div class="subsect__r-wrapper">
                <div class="subsect__svg-wrapper">
                    <img src="../../assets/transactions.svg" alt="transaction logo">
                </div>
                <p>Fast and secure transactions</p>
            </div>
            <div class="subsect__r-wrapper">
                <div class="subsect__svg-wrapper">
                    <img src="../../assets/encryption.svg" alt="encryption logo">
                </div>
                <p>256-bit secure encryption</p>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
    .mid__subsect {
        display: flex;
        justify-content: space-between;
        column-gap: 25%;
        padding: 84px 0 97px 0;
        margin-top: 100px;
    }
    .subsect__l {
        width:50%;
        position: relative;
    }
    .subsect__r {
        width: 50%;
    }
    .subsect__l img {
        position: absolute;
        width: 305px;
    }
    .subsect__l img:nth-child(1) {
        transform: rotate(-5deg);
        left: 0%;
        top: -25%;
    }
    .subsect__l img:nth-child(2) {
        transform: rotate(5deg);
        left: 50%;
        top: -20%;
    }
    .subsect__r {
        text-align: initial;
    }
    .subsect__r h1 {
        font-size: 42px;
        color: #FFFFFF;
        max-width: 32rem;
    }
    .subsect__r p {
        max-width: 28rem;
        margin-bottom: 20px;
    }
    .subsect__r-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 15px 0;
    }
    .subsect__svg-wrapper {
        position: relative;
        background-color: #6738E4;
        border-radius: 13px;
        width: 46px;
        height: 46px;
    }
    .subsect__svg-wrapper img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .subsect__r-wrapper p {
        margin: 0;
        margin-left: 20px;
    }
</style>