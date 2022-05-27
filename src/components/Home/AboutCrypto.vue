<template>
    <div class="mid__header">
        <h1>More than a typical crypto wallet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
    </div>
    <div class="mid__grid-wrapper">
        <div class="grid__child col1">
            <div class="svg__wrapper">
                <img src="../../assets/swap.svg" alt="send and receive icon">
            </div>
            <h1>send & receive</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        </div>
        <div class="grid__child col2">
            <div class="svg__wrapper">
                <img src="../../assets/wallet.svg" alt="wallet icon">
            </div>
            <h1>trading charts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        </div>
        <div class="grid__child main col3">
            <h1>iOS & Android App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.</p>
            <img src="../../assets/img/phone2.png" alt="mobile app image" class="mainchild__img">
        </div>
        <div class="grid__child col4">
            <div class="svg__wrapper">
                <img src="../../assets/chart.svg" alt="chart icon">
            </div>
            <h1>100% secure wallet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        </div>
        <div class="grid__child col5">
            <div class="svg__wrapper">
                <img src="../../assets/trade.svg" alt="trading icon">
            </div>
            <h1>real time trading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        </div>
    </div>
    <button>download app</button>
</template>

<style scoped>
    .mid__header {
        text-align: center;
    }
    .mid__header > h1 {
        font-size: 42px;
        font-weight: 700;
        color: #FFFFFF;
        margin: 114px 0 16px 0;
    }
    .mid__header > p {
        font-size: 18px;
        margin: 0px 16.5vw;
    }
    .mid__grid-wrapper {
        display: grid;
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        justify-content: space-evenly;
        margin-top: 50px;
    }
    .col1 { grid-area: 1 / 1 / 2 / 2; }
    .col2 { grid-area: 2 / 1 / 3 / 2; }
    .col3 { grid-area: 1 / 2 / 3 / 3; }
    .col4 { grid-area: 1 / 3 / 2 / 4; }
    .col5 { grid-area: 2 / 3 / 3 / 4; }
    .grid__child {
        background-color: #282555;
        border-radius: 40px;
        max-width: 330px;
        padding: 61px 22px;
    }
    .grid__child > h1 {
        text-transform: uppercase;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 1.4em;
        margin: 22px 0 8px 0;
    }
    .grid__child > p {
        max-width: 18rem;
    }
    .main, .svg__wrapper {
        position: relative;
        background-color: #6738E4;
    }
    .svg__wrapper {
        border-radius: 20px;
        padding: 35px;
        width: fit-content;
    }
    .svg__wrapper img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .main {
        padding: 45px 35px 0 35px;
        width: 100%;
        max-width: 410px;
        height: 632px;
        overflow: hidden;
    }
    .main > img {
        position: absolute;
        width: 75%;
        left: 50%;
        top: 64%;
        transform: translate(-50%, -36%);
        filter: drop-shadow(0px 0px 10px #00000066);
    }
    .main > h1 {
        margin-top: 0;
    }
    .main > p {
        max-width: unset;
    }
</style>